
class SymbolDefn
{
	constructor(name, code, visual)
	{
		this.name = name;
		this.code = code;
		this.visual = visual;
	}

	static _instances;
	static Instances()
	{
		if (SymbolDefn._instances == null)
		{
			SymbolDefn._instances = new SymbolDefn_Instances();
		}
		return SymbolDefn._instances;
	}
}

class SymbolDefn_Instances
{
	constructor()
	{
		var staffLineSpacing = Staff.spaceBetweenLines();
		var noteSpacing = new Coords(1.5, 1).multiplyScalar(staffLineSpacing / 2);
		var noteSize = noteSpacing.clone().multiplyScalar(.8);

		var fontClef = Font.Instances().Title.name;
		var fontTimeSignature = Font.Instances().TimeSignature.name;
 
		this.AccidentalFlat = new SymbolDefn
		(
			"AccidentalFlat",
			"b",
			new VisualOffset
			(
				new Coords(0, - staffLineSpacing / 4),
				new VisualText("b", fontTimeSignature)
			)
		);
 
		this.AccidentalSharp = new SymbolDefn
		(
			"AccidentalSharp",
			"#",
			new VisualOffset
			(
				new Coords(0, - staffLineSpacing / 4),
				new VisualText("#", fontTimeSignature)
			)
		);
 
		this.ClefF = new SymbolDefn
		(
			"ClefF",
			"F",
			new VisualGroup
			([
				new VisualOffset
				(
					new Coords(0, 1).multiplyScalar(fontClef.heightInPixels / 3),
					new VisualText("F", fontClef)
				),
 
				new VisualOffset
				(
					new Coords(1, -.3).multiplyScalar(fontClef.heightInPixels / 2),
					new VisualText(".", fontClef)
				),
				new VisualOffset
				(
					new Coords(1, -.8).multiplyScalar(fontClef.heightInPixels / 2),
					new VisualText(".", fontClef)
				),
			])
		);
 
		this.ClefG = new SymbolDefn
		(
			"ClefG",
			"G",
			/*
			new VisualGroup
			([
				new VisualOffset
				(
					new Coords(0, 1).multiplyScalar(fontClef.heightInPixels / 3),
					new VisualText("G", fontClef)
				),
 
				new VisualOffset
				(
					new Coords(1, .3).multiplyScalar(fontClef.heightInPixels / 2),
					new VisualText(".", fontClef)
				),
				new VisualOffset
				(
					new Coords(1, .8).multiplyScalar(fontClef.heightInPixels / 2),
					new VisualText(".", fontClef)
				),
			])
			*/
			new VisualImage(new Image("../Content/GClef.svg"))
		);
 
		this.Dot = new SymbolDefn
		(
			"Dot",
			".",
			new VisualCircle(staffLineSpacing * .125, true)
		);
 
		this.MeasureLine = new SymbolDefn
		(
			"MeasureLine",
			"m",
			new VisualLine(new Coords(0, 0), new Coords(0, 4).multiplyScalar(staffLineSpacing))
		);
 
		this.MeasureLineDouble = new SymbolDefn
		(
			"MeasureLineDouble",
			"mm",
			new VisualGroup
			([
				new VisualLine
				(
					new Coords(0, 0),
					new Coords(0, 4).multiplyScalar(staffLineSpacing)
				),
				new VisualLine
				(
					new Coords(.5, 0).multiplyScalar(staffLineSpacing),
					new Coords(.5, 4).multiplyScalar(staffLineSpacing)
				),
			])
		);
 
		this.NoteEighth = new SymbolDefn
		(
			"NoteEighth",
			"n8",
			new VisualGroup
			([
				new VisualEllipse(noteSize, -.0625, true),
				new VisualPath
				([
					new Coords(.85, 0).multiply(noteSpacing),
					new Coords(.85, -6).multiply(noteSpacing),
					new Coords(1.3, -6).multiply(noteSpacing),
					new Coords(1.6, -5).multiply(noteSpacing),
					new Coords(1.6, -3).multiply(noteSpacing),
				]),
			])
		);
 
		this.NoteHalf = new SymbolDefn
		(
			"NoteHalf",
			"n2",
			new VisualGroup
			([
				new VisualEllipse(noteSize, -.0625, false),
				new VisualLine
				(
					new Coords(.85, 0).multiply(noteSpacing),
					new Coords(.85, -6).multiply(noteSpacing)
				)
			])
		);
 
		this.NoteQuarter = new SymbolDefn
		(
			"NoteQuarter",
			"n4",
			new VisualGroup
			([
				new VisualEllipse(noteSize, -.0625, true),
				new VisualLine
				(
					new Coords(.85, 0).multiply(noteSpacing),
					new Coords(.85, -6).multiply(noteSpacing)
				)
			])
		);
 
		this.NoteSixteenth = new SymbolDefn
		(
			"NoteSixteenth",
			"n16",
			new VisualGroup
			([
				new VisualEllipse(noteSize, -.0625, true),
				new VisualPath
				([
					new Coords(.85, 0).multiply(noteSpacing),
					new Coords(.85, -6).multiply(noteSpacing),
					new Coords(1.3, -6).multiply(noteSpacing),
					new Coords(1.6, -5).multiply(noteSpacing),
					new Coords(1.6, -3).multiply(noteSpacing),
				]),
				new VisualPath
				([
					new Coords(.85, 0).multiply(noteSpacing),
					new Coords(.85, -5).multiply(noteSpacing),
					new Coords(1.1, -5).multiply(noteSpacing),
					new Coords(1.4, -4).multiply(noteSpacing),
					new Coords(1.4, -2).multiply(noteSpacing),
				]),
			])
		);
 
		this.NoteWhole = new SymbolDefn
		(
			"NoteWhole",
			"n1",
			new VisualGroup
			([
				new VisualEllipse(noteSize, -.0625, false)
			])
		);
 
		this.TimeSignatureTwoFour = new SymbolDefn
		(
			"TimeSignatureTwoFour",
			"2_4",
			new VisualOffset
			(
				new Coords(0, .8).multiplyScalar(staffLineSpacing),
				new VisualGroup
				([
					new VisualText("2", fontTimeSignature),
					new VisualOffset
					(
						new Coords(0, 2).multiplyScalar(staffLineSpacing),
						new VisualText("4", fontTimeSignature)
					),
				])
			)
		);
 
		this.TimeSignatureFourFour = new SymbolDefn
		(
			"TimeSignatureFourFour",
			"4_4",
			new VisualOffset
			(
				new Coords(0, .8).multiplyScalar(staffLineSpacing),
				new VisualGroup
				([
					new VisualText("4", fontTimeSignature),
					new VisualOffset
					(
						new Coords(0, 2).multiplyScalar(staffLineSpacing),
						new VisualText("4", fontTimeSignature)
					),
				])
			)
		);

		this.TimeSignatureSixEight = new SymbolDefn
		(
			"TimeSignatureSixEight",
			"6_8",
			new VisualOffset
			(
				new Coords(0, .8).multiplyScalar(staffLineSpacing),
				new VisualGroup
				([
					new VisualText("6", fontTimeSignature),
					new VisualOffset
					(
						new Coords(0, 2).multiplyScalar(staffLineSpacing),
						new VisualText("8", fontTimeSignature)
					),
				])
			)
		);
	}
}
