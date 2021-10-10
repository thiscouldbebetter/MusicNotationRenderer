
class Symbol
{
	constructor(defnName, posInNotes)
	{
		this.defnName = defnName;
		this.posInNotes = posInNotes;
	 
		this._drawPos = new Coords();
	}

	defn()
	{
		return SymbolDefn.Instances()[this.defnName];
	}
 
	// json
 
	fromStringJSON_ObjectPrototypesSet()
	{
		Object.setPrototypeOf(this.posInNotes, Symbol.prototype);
		Object.setPrototypeOf(this._drawPos, Coords.prototype); 
	}
 
	// drawing
 
	static _noteSize = new Coords();
	static noteSize(staff)
	{
		return Symbol._noteSize.overwriteWithXY(2, .5).multiplyScalar
		(
			staff.spaceBetweenLines()
		);
	}
 
	draw(display, session, song, page, staff)
	{
		var defn = this.defn();
		var visual = defn.visual;
		var noteSize = Symbol.noteSize(staff);
		var drawPos = this._drawPos.overwriteWith
		(
			this.posInNotes
		).multiply
		(
			noteSize
		).add
		(
			staff.pos(session, song, page)
		);
		visual.draw(display, drawPos);
	}
 
}
