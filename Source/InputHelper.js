
class InputHelper
{
	constructor()
	{
		this.keyPressed = null;
	}

	initialize()
	{
		document.body.onkeydown = this.handleEventKeyDown.bind(this);
		document.body.onkeyup = this.handleEventKeyUp.bind(this);
	}
 
	// events
 
	handleEventKeyDown(event)
	{
		this.keyPressed = event.key;
	}
 
	handleEventKeyUp(event)
	{
		this.keyPressed = null;
	}
}
