wwplayer.define(["jquery","Skin","Logo","globals"],function(t,e,n,o){return e.extend({init:function(t){this._super(t)},apply:function(){this.skinElement='<link rel="stylesheet" type="text/css" href="'+window.wirewax.baseUrl+'stylesheets/skins/default.css" />',t("head").append(this.skinElement)},getLogo:function(){var e=this;if(!e.logo){var l=t(t(this.templates).filter("#logo-template").html());e.logo=new n(l,e.animationController),o.WHITELABEL&&e.logo.hidePTCOnly()}return e.logo},getScrubber:function(){return null},getBottomBarPlayButton:function(){return null},getBottomBarRenditionController:function(){return null},getBottomBarPauseButton:function(){return null},getShareControllerElement:function(){return!1},getBottomBarFullscreenButton:function(){return null},getVolumeControllerElement:function(){return null}})});