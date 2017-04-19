Vec3 = function(x, y, z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    if(this.x < this.y && this.x < this.z)
	return this.x;
    if(this.y < this.x && this.y < this.z)
	return this.y;
    if(this.z < this.x && this.z < this.y)
	return this.z;
}

Vec3.prototype.max = function()
{
    if(this.x > this.y && this.x > this.z)
	return this.x;
    if(this.y > this.x && this.y > this.z)
	return this.y;
    if(this.z > this.x && this.z > this.y)
	return this.z;
}

Vec3.prototype.mid = function()
{
    if(this.x < this.y && this.x > this.z || this.x > this.y && this.x < this.z)
	return this.x;
    if(this.y < this.x && this.y > this.z || this.y > this.x && this.y < this.z)
	return this.y;
    if(this.z < this.x && this.z > this.y || this.y > this.x && this.y < this.z)
	return this.z;
}

Vec3.prototype.AreaOfTriangle = function(v0, v1, v2)
{
    var x0, y0, z0, x1, y1, z1;
    x0 = v0.x - v1.x;
    y0 = v0.y - v1.y;
    z0 = v0.z - v1.z;
    x1 = v2.x - v1.x;
    y1 = v2.y - v1.y;
    z1 = v2.z - v1.z;

    return 1/2*Math.sqrt( (y0*z1-y1*z0)*(y0*z1-y1*z0) +
			  (z0*x1-z1*x0)*(z0*x1-z1*x0) +
			  (x0*y1-x1*y0)*(x0*y1-x1*y0) );
}
