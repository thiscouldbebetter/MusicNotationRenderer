
class Visual
{
	constructor()
	{
		this.typeName = this.constructor.name;
	}

	static fromStringJSON_ObjectPrototypesSet(visual)
	{
		var prototypeToSet = null;

		var visualTypeName = visual.typeName;
		if (visualTypeName == VisualCircle.name)
		{
			prototypeToSet = VisualCircle.prototype;
		}
		else if (visualTypeName == VisualEllipse.name)
		{
			prototypeToSet = VisualEllipse.prototype;
		}
		else if (visualTypeName == VisualGroup.name)
		{
			prototypeToSet = VisualGroup.prototype;
		}
		else if (visualTypeName == VisualImage.name)
		{
			prototypeToSet = VisualImage.prototype;
		}
		else if (visualTypeName == VisualLine.name)
		{
			prototypeToSet = VisualLine.prototype;
		}
		else if (visualTypeName == VisualOffset.name)
		{
			prototypeToSet = VisualOffset.prototype;
		}
		else if (visualTypeName == VisualPath.name)
		{
			prototypeToSet = VisualPath.prototype;
		}
		else if (visualTypeName == VisualText.name)
		{
			prototypeToSet = VisualText.prototype;
		}
		else
		{
			throw new Error("Not yet implemented!");
		}

		visual.__proto__ = prototypeToSet;
		visual.fromStringJSON_ObjectPrototypesSet();
	}
}