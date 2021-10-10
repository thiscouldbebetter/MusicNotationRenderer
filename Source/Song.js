
class Song
{
	constructor(name, pages)
	{
		this.name = name;
		this.pages = pages;
	 
		this.pageIndexSelected = 0;
	}

	static demo()
	{
		var pageSize = new Coords(425, 550);
 
		var returnValue = new Song
		(
			"Demo",
			[
				new Page
				(
					0, // index
					pageSize,
					[
						new Staff
						(
							0,
							[
								new Symbol("ClefG", new Coords(1, 0)),
								new Symbol("TimeSignatureFourFour", new Coords(3, 0)),
								new Symbol("AccidentalSharp", new Coords(4, 0)),
								new Symbol("MeasureLineDouble", new Coords(5, 0)),
 
								new Symbol("NoteWhole", new Coords(6, 6)),
								new Symbol("MeasureLine", new Coords(7, 0)),
 
								new Symbol("NoteHalf", new Coords(8, 2)),
								new Symbol("NoteQuarter", new Coords(9, 3)),
								new Symbol("NoteQuarter", new Coords(10, 3)),
								new Symbol("MeasureLine", new Coords(11, 0)),
 
								new Symbol("NoteHalf", new Coords(12, 4)),
								new Symbol("NoteQuarter", new Coords(14, 3)),
								new Symbol("Dot", new Coords(14.7, 3)),
								new Symbol("NoteEighth", new Coords(16, 4)),
								new Symbol("NoteQuarter", new Coords(17, 3)),
								new Symbol("Dot", new Coords(17.7, 3)),
								new Symbol("NoteEighth", new Coords(19, 5)),
 
								new Symbol("MeasureLine", new Coords(20, 0)),
 
								new Symbol("NoteWhole", new Coords(22, 6)),
 
								new Symbol("MeasureLineDouble", new Coords(24.3, 0)),
							]
						)
					]
				),
			]
		);
 
		return returnValue;
	}
 
	pageSelected()
	{
		return this.pages[this.pageIndexSelected];
	}
 
	spaceBetweenPages()
	{
		return 16;
	}
 
	// json
 
	static fromStringJSON(songAsJSON)
	{
		var returnValue = JSON.parse(songAsJSON);
		returnValue.__proto__ = Song.prototype;
		returnValue.fromStringJSON_ObjectPrototypesSet();
		return returnValue;
	}
 
	fromStringJSON_ObjectPrototypesSet()
	{
		for (var i = 0; i < this.pages.length; i++)
		{
			var page = this.pages[i];
			page.__proto__ = Page.prototype;
			page.fromStringJSON_ObjectPrototypesSet();
		}
	}
 
	toStringJSON()
	{
		var returnValue = JSON.stringify(this, null, 4);
		return returnValue;
	}
 
	// drawing
 
	draw(display, session)
	{
		for (var i = 0; i < this.pages.length; i++)
		{
			var page = this.pages[i];
			page.draw(display, session, this);
		}
	}
 
	toCanvas()
	{
		var numberOfPages = this.pages.length;
		var pageSize = this.pages[0].size;
		var spaceBetweenPages = this.spaceBetweenPages();
		var displaySize = new Coords
		(
			pageSize.x,
			(pageSize.y * numberOfPages)
				+ (spaceBetweenPages * numberOfPages - 1)
		);
		var display = new Display(displaySize);
		var displayAsCanvas = display.toCanvas();
		this.draw(display, Session.Instance);
		return displayAsCanvas;
	}
 
	toImgElement()
	{
		var thisAsCanvas = this.toCanvas();
		var thisAsDataURL = thisAsCanvas.toDataURL();
		var returnValue = document.createElement("img");
		returnValue.src = thisAsDataURL;
		return returnValue;
	}
}
