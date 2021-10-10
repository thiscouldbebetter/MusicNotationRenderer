
class Display
{
	constructor(size)
	{
		this.size = size;
		this.colorFore = "Black";
		this.colorBack = "White";
	}

	toCanvas()
	{
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.size.x;
		this.canvas.height = this.size.y;
 
		this.graphics = this.canvas.getContext("2d");
 
		return this.canvas;
	}
 
	// drawing
 
	drawCircle(center, radius, colorFill, colorBorder)
	{
		if (colorFill != null)
		{
			this.graphics.fillStyle = colorFill;
			this.graphics.beginPath();
			this.graphics.arc(center.x, center.y, radius, 0, Math.PI * 2);
			this.graphics.fill();
		}
 
		if (colorBorder != null)
		{
			this.graphics.strokeStyle = colorBorder;
			this.graphics.beginPath();
			this.graphics.arc(center.x, center.y, radius, 0, Math.PI * 2);
			this.graphics.stroke();
		}
	}
 
	drawEllipse(center, size, rotationInTurns, colorFill, colorBorder)
	{
		var rotationInRadians = Math.PI * 2 * rotationInTurns;
		if (colorFill != null)
		{
			this.graphics.fillStyle = colorFill;
			this.graphics.beginPath();
			this.graphics.ellipse
			(
				center.x, center.y,
				size.x, size.y,
				rotationInRadians, 0, Math.PI * 2
			);
			this.graphics.fill();
		}
 
		if (colorBorder != null)
		{
			this.graphics.strokeStyle = colorBorder;
			this.graphics.beginPath();
			this.graphics.ellipse
			(
				center.x, center.y,
				size.x, size.y,
				rotationInRadians, 0, Math.PI * 2
			);
			this.graphics.stroke();
		}
	}
 
	drawLine(fromPos, toPos, color)
	{
		this.graphics.strokeStyle = color;
		this.graphics.beginPath();
		this.graphics.moveTo(fromPos.x, fromPos.y);
		this.graphics.lineTo(toPos.x, toPos.y);
		this.graphics.stroke();
	}
 
	drawPath(vertices, color)
	{
		this.graphics.strokeStyle = color;
		this.graphics.beginPath();
		var vertex = vertices[0];
		this.graphics.moveTo(vertex.x, vertex.y);
		for (var i = 1; i < vertices.length; i++)
		{
			vertex = vertices[i];
			this.graphics.lineTo(vertex.x, vertex.y);
		}
		this.graphics.stroke();
	}
 
	drawRectangle(pos, size, colorFill, colorBorder)
	{
		if (colorFill != null)
		{
			this.graphics.fillStyle = colorFill;
			this.graphics.fillRect(pos.x, pos.y, size.x, size.y);
		}
 
		if (colorBorder != null)
		{
			this.graphics.strokeStyle = colorBorder;
			this.graphics.strokeRect(pos.x, pos.y, size.x, size.y);
		}
	}
 
	drawText(text, font, pos, color)
	{
		this.graphics.fillStyle = color;
		this.graphics.font = font.systemFont;
		var textWidth = this.graphics.measureText(text).width;
		var textWidthHalf = textWidth / 2;
		this.graphics.fillText(text, pos.x - textWidthHalf, pos.y + font.heightInPixelsHalf);
	}
}
