
class Coords
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	static _instances;
	static Instances()
	{
		if (Coords._instances == null)
		{
			Coords._instances = new Coords_Instances();
		}
		return Coords._instances;
	}
  
	add(other)
	{
		this.x += other.x;
		this.y += other.y;
		return this;
	}
 
	clone()
	{
		return new Coords(this.x, this.y);
	}
 
	overwriteWith(other)
	{
		this.x = other.x;
		this.y = other.y;
		return this;
	}
 
	overwriteWithXY(x, y)
	{
		this.x = x;
		this.y = y;
		return this;
	}
 
	multiply(other)
	{
		this.x *= other.x;
		this.y *= other.y;
		return this;
	}
 
	multiplyScalar(scalar)
	{
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
}
 
class Coords_Instances
{
	constructor()
	{
		this.Zeroes = new Coords(0, 0);
	}
}
