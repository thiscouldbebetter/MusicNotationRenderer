
class VisualPath extends Visual
{
	constructor(vertices)
	{
		super();

		this.vertices = vertices;
	 
		this._verticesTransformed = [];
	}

	draw(display, drawPos)
	{
		for (var i = 0; i < this.vertices.length; i++)
		{
			var vertex = this.vertices[i];
			var vertexTransformed = vertex.clone().add(drawPos);
			this._verticesTransformed[i] = vertexTransformed;
		}
 
		display.drawPath
		(
			this._verticesTransformed,
			display.colorFore
		);
	}

	fromStringJSON_ObjectPrototypesSet()
	{
		throw new Error("todo");
	}
}