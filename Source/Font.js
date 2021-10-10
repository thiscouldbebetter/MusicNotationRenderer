
class Font
{
	constructor(familyName, heightInPixels)
	{
		this.familyName = familyName;
		this.heightInPixels = heightInPixels;
	 
		this.heightInPixelsHalf = this.heightInPixels / 2;
		this.systemFont = this.heightInPixels + "px " + this.familyName;
	}

	static InstanceDefault = new Font("sans-serif", 10);
}
 