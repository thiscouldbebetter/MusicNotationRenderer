
class Staff
{
	constructor(index, symbols)
	{
		this.index = index;
		this.symbols = symbols;
	}

	pos(session, song, page)
	{
		if (this._pos == null)
		{
			var pageMargin = page.margin();
			var spaceBetweenStaves = page.spaceBetweenStaves();
 
			this._pos = new Coords
			(
				pageMargin,
				pageMargin + this.index * spaceBetweenStaves
			);
		}
 
		return this._pos;
	}
 
	numberOfLines()
	{
		return 5;
	}
 
	static spaceBetweenLines()
	{
		return 8;
	}
 
	spaceBetweenLines()
	{
		return Staff.spaceBetweenLines();
	}
 
	// json
 
	fromStringJSON_ObjectPrototypesSet()
	{
		for (var i = 0; i < this.symbols.length; i++)
		{
			var symbol = this.symbols[i];
			symbol.__proto__ = Symbol.prototype;
			symbol.fromStringJSON_ObjectPrototypesSet();
		}
	}
 
	// drawing
 
	draw(display, session, song, page)
	{
		var numberOfLines = this.numberOfLines();
		var spaceBetweenLines = this.spaceBetweenLines();
 
		var fromPos = this.pos(session, song, page).clone();
		var toPos = fromPos.clone();
		toPos.x += page.size.x - page.margin() * 2;
		for (var i = 0; i < numberOfLines; i++)
		{
			display.drawLine(fromPos, toPos, display.colorFore);
			fromPos.y += spaceBetweenLines;
			toPos.y += spaceBetweenLines;
		}
 
		for (var i = 0; i < this.symbols.length; i++)
		{
			var symbol = this.symbols[i];
			symbol.draw(display, session, song, page, this);
		}
	}
}
