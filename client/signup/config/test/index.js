/**
 * External dependencies
 */
import { intersection, isEmpty, keys } from 'lodash';

/**
 * Internal dependencies
 */
import flows from '../flows';
import steps from '../steps';

jest.mock( 'lib/abtest', () => ( {
	abtest: () => '',
} ) );
jest.mock( 'lib/signup/step-actions', () => ( {} ) );
jest.mock( 'lib/user', () => () => {
	return {
		get() {
			return {};
		},
	};
} );

describe( 'Signup config steps', () => {
	test( 'should not have overlapping step/flow names', () => {
		const overlappingNames = intersection( keys( steps ), keys( flows.getFlows() ) );

		if ( ! isEmpty( overlappingNames ) ) {
			throw new Error(
				'Step and flow names must be unique. The following names are used as both step and flow names: [' +
					overlappingNames +
					'].'
			);
		}
	} );

	test( 'Should not have unused steps configured', () => {
		const activeSteps = [
			...new Set(
				Object.values( flows.getFlows() ).flatMap( ( { steps: stepsArray } ) => stepsArray )
			),
		];
		const deadSteps = [];

		Object.values( steps )
			.map( ( { stepName } ) => stepName )
			.forEach( ( stepName ) => {
				if ( ! activeSteps.includes( stepName ) ) {
					deadSteps.push( stepName );
				}
			} );

		if ( deadSteps.length > 0 ) {
			throw new Error( 'The following steps do not appear in any flow: [' + deadSteps + '].' );
		}
	} );
} );
