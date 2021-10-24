
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
					16, // margin
					// drawables
					[
						new Drawable
						(
							new VisualText("Endearing Young Charms", "Title"),
							new Coords(pageSize.x / 2, Font.Instances().Title.heightInPixels)
						),

						new Drawable
						(
							new VisualText("Alto Xylophone"),
							new Coords(50, 50)
						),

						new Drawable
						(
							new VisualText("Traditional"),
							new Coords(380, 40)
						),

						new Drawable
						(
							new VisualText("Words by Thomas Moore"),
							new Coords(350, 50)
						),

						new Drawable
						(
							new VisualText("With feeling."),
							new Coords(40, 80)
						),

					],
					new StaffGroup
					(
						new Coords(0, 80), // pos
						64, // spaceBetweenStaves
						[
							new Staff
							(
								0,
								[
									new Symbol("ClefG", new Coords(1, 0)),
									new Symbol("TimeSignatureSixEight", new Coords(3, 0)),

									new Symbol("AccidentalSharp", new Coords(4, 0)),
									new Symbol("AccidentalSharp", new Coords(4.5, 3)),
									new Symbol("AccidentalSharp", new Coords(5, -1)),
									new Symbol("AccidentalSharp", new Coords(5.5, 2)),

									new Symbol("MeasureLineDouble", new Coords(6, 0)),
	 	 
									new Symbol("NoteSixteenth", new Coords(7, 6)),
									new Symbol("NoteSixteenth", new Coords(8, 7)),

									new Symbol("MeasureLine", new Coords(9, 0)),

									new Symbol("NoteEighth", new Coords(10, 8)),
									new Symbol("Dot", new Coords(10.75, 8)),
									new Symbol("NoteSixteenth", new Coords(12, 7)),
									new Symbol("NoteEighth", new Coords(13, 8)),
									new Symbol("NoteEighth", new Coords(14, 8)),
									new Symbol("NoteEighth", new Coords(15, 6)),
									new Symbol("NoteEighth", new Coords(16, 4)),

									new Symbol("MeasureLine", new Coords(17, 0)),

									new Symbol("NoteEighth", new Coords(18, 5)),
									new Symbol("NoteEighth", new Coords(19, 3)),
									new Symbol("NoteEighth", new Coords(20, 1)),									
								]
							)
						]

					) // end new StaffGroup

				) // end new Page
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
