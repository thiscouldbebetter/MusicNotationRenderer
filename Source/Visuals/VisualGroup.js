
class VisualGroup extends Visual
{
	constructor(children)
	{
		super();
		this.children = children;
	}

	draw(display, drawPos)
	{
		for (var i = 0; i < this.children.length; i++)
		{
			var child = this.children[i];
			child.draw(display, drawPos);
		}
	}

	fromStringJSON_ObjectPrototypesSet()
	{
		this.children.forEach(x => Visual.fromStringJSON_ObjectPrototypesSet(x));
	}

}
