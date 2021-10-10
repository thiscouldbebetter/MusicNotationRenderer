
class VisualGroup
{
	constructor(children)
	{
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
}
