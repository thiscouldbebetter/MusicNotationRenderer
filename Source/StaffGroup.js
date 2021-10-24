
class StaffGroup
{
	constructor(pos, spaceBetweenStaves, staves)
	{
		this.pos = pos;
		this.spaceBetweenStaves = spaceBetweenStaves || 64;
		this.staves = staves;

		this.staffIndexSelected = 0;
	}

	staffSelected()
	{
		return this.stave[this.staffIndexSelected];
	}

	// Json.

	fromStringJSON_ObjectPrototypesSet()
	{
		for (var i = 0; i < this.staves.length; i++)
		{
			var staff = this.staves[i];
			staff.__proto__ = Staff.prototype;
			staff.fromStringJSON_ObjectPrototypesSet();
		}
	}

	// Drawable.

	draw(display, session, song, page)
	{ 
		for (var i = 0; i < this.staves.length; i++)
		{
			var staff = this.staves[i];
			staff.draw(display, session, song, page, this);
		}
	}
}