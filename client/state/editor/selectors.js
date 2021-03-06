/**
 * External dependencies
 */
import { get, includes } from 'lodash';

/**
 * Internal dependencies
 */
import { getSelectedSiteId } from 'state/ui/selectors';
import { getSite, getSiteSlug } from 'state/sites/selectors';
import { getEditedPost, getSitePost } from 'state/posts/selectors';
import { getPreference } from 'state/preferences/selectors';
import canCurrentUser from 'state/selectors/can-current-user';
import { isPublished, isBackDatedPublished, isFutureDated, getPreviewURL } from 'state/posts/utils';
import getEditorUrl from 'state/selectors/get-editor-url';
import { addQueryArgs } from 'lib/route';

import 'state/editor/init';

/**
 * Returns the current editor post ID, or `null` if a new post.
 *
 * @param  {object} state Global state tree
 * @returns {?number}      Current editor post ID
 */
export function getEditorPostId( state ) {
	return state.editor.postId;
}

/**
 * Returns whether editing a new post in the post editor.
 *
 * @param  {object}  state Global state tree
 * @returns {boolean}       Whether editing new post in editor
 */
export function isEditorNewPost( state ) {
	return ! getEditorPostId( state );
}

/**
 * Returns the editor URL for duplicating a given site ID, post ID pair.
 *
 * @param  {object} state       Global state tree
 * @param  {number} siteId      Site ID
 * @param  {number} postId      Post ID
 * @param  {string} type        Post type
 * @returns {string}             Editor URL path
 */
export function getEditorDuplicatePostPath( state, siteId, postId, type = 'post' ) {
	return addQueryArgs(
		{
			'jetpack-copy': postId,
		},
		getEditorUrl( state, siteId, null, type )
	);
}

/**
 * Returns the editor new post URL path for the given site ID and type.
 *
 * @param  {object} state       Global state tree
 * @param  {number} siteId      Site ID
 * @param  {number} type        Post type
 * @returns {string}             Editor URL path
 */
export function getEditorNewPostPath( state, siteId, type = 'post' ) {
	let path;
	switch ( type ) {
		case 'post':
			path = '/post';
			break;
		case 'page':
			path = '/page';
			break;
		default:
			path = `/edit/${ type }`;
			break;
	}

	const siteSlug = getSiteSlug( state, siteId );
	if ( siteSlug ) {
		path += `/${ siteSlug }`;
	} else {
		path += `/${ siteId }`;
	}

	return `/block-editor${ path }`;
}

/**
 * Returns the editor URL path for the given site ID, post ID pair.
 *
 * @param  {object} state       Global state tree
 * @param  {number} siteId      Site ID
 * @param  {number} postId      Post ID
 * @param  {string} defaultType Fallback post type if post not found
 * @returns {string}             Editor URL path
 */
export function getEditorPath( state, siteId, postId, defaultType = 'post' ) {
	if ( ! siteId ) {
		return 'block-editor/post';
	}
	const editedPost = getEditedPost( state, siteId, postId );
	const type = get( editedPost, 'type', defaultType );
	let path = getEditorNewPostPath( state, siteId, type );

	if ( postId ) {
		path += `/${ postId }`;
	}

	return path;
}

/**
 * Returns whether the confirmation sidebar is enabled for the given siteId
 *
 * @param  {object}  state     Global state tree
 * @param  {number}  siteId    Site ID
 * @returns {boolean}           Whether or not the sidebar is enabled
 */
export function isConfirmationSidebarEnabled( state, siteId ) {
	return getPreference( state, 'editorConfirmationDisabledSites' ).indexOf( siteId ) === -1;
}

/*
 * Returns whether editor save is currently blocked for some reason identified by `key`.
 * If `key` is not specified, returns whether save is blocked for any reason.
 */
export function isEditorSaveBlocked( state, key ) {
	const { saveBlockers } = state.editor;

	if ( ! key ) {
		return !! saveBlockers.length;
	}

	return includes( saveBlockers, key );
}

export function getEditorPostPreviewUrl( state ) {
	const siteId = getSelectedSiteId( state );
	const postId = getEditorPostId( state );
	const site = getSite( state, siteId );
	const post = getSitePost( state, siteId, postId );
	return getPreviewURL( site, post, state.editor.autosavePreviewUrl );
}

export function isEditorAutosaving( state ) {
	return state.editor.isAutosaving;
}

export function isEditorLoading( state ) {
	return state.editor.isLoading;
}

export function isEditorIframeLoaded( state ) {
	return state.editor.isIframeLoaded;
}

export function getEditorPublishButtonStatus( state ) {
	const siteId = getSelectedSiteId( state );
	const postId = getEditorPostId( state );
	const currentPost = getSitePost( state, siteId, postId );
	const editedPost = getEditedPost( state, siteId, postId );
	const canUserPublishPosts = canCurrentUser( state, siteId, 'publish_posts' );

	// Return `null` (means "unknown") if the site or the post to edit is not available.
	// Typically happens when async-loading them is in progress.
	if ( ! siteId || ! editedPost ) {
		return null;
	}

	if (
		( isPublished( currentPost ) &&
			! isBackDatedPublished( currentPost ) &&
			! isFutureDated( editedPost ) ) ||
		( currentPost && currentPost.status === 'future' && isFutureDated( editedPost ) )
	) {
		return 'update';
	}

	if ( isFutureDated( editedPost ) ) {
		return 'schedule';
	}

	if ( canUserPublishPosts ) {
		return 'publish';
	}

	if ( currentPost && currentPost.status === 'pending' ) {
		return 'update';
	}

	return 'requestReview';
}

export function getEditorInitialRawContent( state ) {
	return state.editor.rawContent.initial;
}

export function getEditorRawContent( state ) {
	return state.editor.rawContent.current;
}

export function getEditorLoadingError( state ) {
	return state.editor.loadingError;
}
