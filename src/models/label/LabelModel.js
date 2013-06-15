/**
 * @license
 * This file is part of the Game Closure SDK.
 *
 * The Game Closure SDK is free software: you can redistribute it and/or modify
 * it under the terms of the Mozilla Public License v. 2.0 as published by Mozilla.

 * The Game Closure SDK is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Mozilla Public License v. 2.0 for more details.

 * You should have received a copy of the Mozilla Public License v. 2.0
 * along with the Game Closure SDK.  If not, see <http://mozilla.org/MPL/2.0/>.
 */
import math.geom.Point as Point;
import math.geom.Circle as Circle;

import shooter.models.EntityModel as EntityModel;

/**
 * Model to handle a label.
 */
exports = Class(EntityModel, function (supr) {
	this.init = function (opts) {
		opts = merge(
			opts,
			{
				text: ''
			}
		);

		supr(this, 'init', [opts]);
	};

	/**
	 * This function is called when this model is obtained from the model pool.
	 */
	this.refreshOpts = function () {
		supr(this, 'refreshOpts');

		this._opts.dt = 0;
	};

	/**
	 * This function is called while the model is active.
	 * Keep showing for one second, if one second has pased then return true and 
	 * this model will be removed from the model pool.
	 */
	this.tick = function (dt) {
		this._opts.dt += dt;
		return (this._opts.dt > 1000) || supr(this, 'tick', arguments);
	};
});