
class Font
{
	constructor(name, systemFontName, heightInPixels)
	{
		this.name = name;
		this.systemFontName = systemFontName;
		this.heightInPixels = heightInPixels;
	 
		this.heightInPixelsHalf = this.heightInPixels / 2;
		this.systemFont = this.heightInPixels + "px " + this.systemFontName;
	}

	static Instances()
	{
		if (Font._instances == null)
		{
			Font._instances = new Font_Instances();
		}
		return Font._instances;
	}

	static byName(name)
	{
		return Font.Instances().byName(name);
	}
}

class Font_Instances
{
	constructor()
	{
		this.Default = new Font("Default", "sans-serif", 10);
		this.TimeSignature = new Font("TimeSignature", "sans-serif", 15);
		this.Title = new Font("Title", "sans-serif", 20);

		this._All =
		[
			this.Default,
			this.TimeSignature,
			this.Title
		];

		this._AllByName = new Map(this._All.map(x => [x.name, x]));
	}

	byName(name)
	{
		return this._AllByName.get(name);
	}
}
 