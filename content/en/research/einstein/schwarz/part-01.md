---
title: "The Gravitational Field of a Mass Point according to Einstein’s Theory"
# linkTitle: "Einstein"
heading: "Extremely Weapons-of-Mass-Destruction-Level Unenlightened"
# date: 2022-07-26
weight: 2
description: "Einstein was a German physicist who made physics overly complicated by using arbitrary tensors"
a: "Einstein"
c: "firebrick"
draft: true
---



by K. Schwarzschild

(Communicated January 13th, 1916 [see above p. 42].) 

Foreword. This fundamental memoir contains the ORIGINAL form of the solution of Schwarzschild’s problem.

It is regular in the whole space-time, with the only exception of the origin of the spatial co-ordinates; consequently,
it leaves no room for the science fiction of the black holes. (In the centuries of the decline of the Roman Empire
people said: “Graecum est, non legitur”...).

§1. In his work on the motion of the perihelion of Mercury (see Sitzungsberichte of November 18th, 1915) Mr. Einstein has posed the following problem: 

Let a point move according to the prescription:

...

where the gµν stand for functions of the variables x, and in the variation the variables x must be kept fixed at the beginning and at the end of the path of integration. In short, the point shall move along a geodesic line in the manifold characterised by the line element ds. 

The execution of the variation yields the equations of motion of the point:

<!-- d
2xα
ds2
=
X
µ,ν
Γ
α
µν
dxµ
ds
dxν
ds , α, β = 1, 2, 3, 4, (2)
where
Γ
α
µν = −
1
2
X
β
g
αβ
∂gµβ
∂xν
+
∂gνβ
∂xµ
−
∂gµν
∂xβ

, (3) -->

and the g αβ stand for the normalised minors associated to gαβ in the determinant |gµν |.

According to Einstein’s theory, this is the motion of a massless point in the gravitational field of a mass at the point x1 = x2 = x3 = 0, if the “components of the gravitational field” Γ fulfil everywhere, with the exception of the point x1 = x2 = x3 = 0, the “field equations” 


..

and if also the “equation of the determinant”

|gµν | = −1 (5)

is satisfied.

The field equations together with the equation of the determinant have the fundamental property that they preserve their form under the substitution of other arbitrary variables in lieu of x1,

x2, x3, x4, as long as the determinant of the substitution is equal to 1.

Let x1, x2, x3 stand for rectangular co-ordinates, x4 for the time; furthermore, the mass at the origin shall not change with time, and the motion at infinity shall be rectilinear and uniform.

Then, according to Mr. Einstein’s list, loc. cit. p. 833, the following conditions must be fulfilled
too:

1. All the components are independent of the time x4.

2. The equations gρ4 = g4ρ = 0 hold exactly for ρ = 1, 2, 3.

3. The solution is spatially symmetric with respect to the origin of the co-ordinate system in the  sense that one finds again the same solution when x1, x2, x3 are subjected to an orthogonal transformation (rotation).

4. The gµν vanish at infinity, with the exception of the following four limits different from zero: g44 = 1, g11 = g22 = g33 = −1.

The problem is to find out a line element with coefficients such that the field equations, the equation
of the determinant and these four requirements are satisfied.


## §2. Mr. Einstein showed that this problem, in first approximation, leads to Newton’s law 

The second approximation correctly reproduces the known anomaly in the motion of the perihelion of Mercury.

<!-- The following calculation yields the exact solution of the problem. It is
always pleasant to avail of exact solutions of simple form. More importantly, the calculation proves
also the uniqueness of the solution, about which Mr. Einstein’s treatment still left doubt, and
which could have been proved only with great difficulty, in the way shown below, through such an
approximation method. The following lines therefore let Mr. Einstein’s result shine with increased
clearness. -->

## §3. If one calls t the time, x, y, z, the rectangular co-ordinates, the most general line element that satisfies the conditions 1-3 is clearly the following: 

<!-- ds2 = F dt2 − G(dx2 + dy2 + dz2
) − H(xdx + ydy + zdz)
2
where F, G, H are functions of r =
p
x2 + y
2 + z
2. -->

The condition (4) requires: 

for 
<!-- r = ∞ : F = G = 1, H = 0. -->

When one goes over to polar co-ordinates according to 

<!-- x = r sin ϑ cos φ, y = r sin ϑ sin φ, z = -->

r cos ϑ, the same line element reads:

<!-- ds2 = F dt2 − G(dr2 + r
2
dϑ2 + r
2
sin2ϑdφ2
) − Hr2
dr2
= F dt2 − (G + Hr2
)dr2 − Gr2
(dϑ2 + sin2ϑdφ2
).
(6) -->

Now the volume element in polar co-ordinates is equal to r

<!-- sin ϑdrdϑdφ,  -->

the functional determinant

<!-- 2
sin ϑ  -->

of the old with respect to the new coordinates is different from 1; then the field equations

...

would not remain in unaltered form if one would calculate with these polar co-ordinates, and one
would have to perform a cumbersome transformation. However there is an easy trick to circumvent
this difficulty. One puts:

<!-- x1 =
r
3
3
, x2 = − cos ϑ, x3 = φ. (7) -->

Then we have for the volume element: r

<!-- 2dr sin ϑdϑdφ = dx1dx2dx3.  -->

The new variables are then polar co-ordinates with the determinant 1. They have the evident advantages of polar co-ordinates for the treatment of the problem, and at the same time, when one includes also t = x4, the field
equations and the determinant equation remain in unaltered form.

In the new polar co-ordinates the line element reads:


...


Then f1, f2 = f3, f4 are three functions of x1 which have to fulfil the following conditions:

1. For x1 = ∞ : f1 = 1/r4 = (3x1) ..

<!-- 

−4/3
, f2 = f3 = r
2 = (3x1)
2/3
, f4 = 1. -->

2. The equation of the determinant: f1 · f2 · f3 · f4 = 1.

3. The field equations.

4. Continuity of the f, except for x1 = 0.


§4. In order to formulate the field equations one must first form the components of the gravitational field corresponding to the line element (9). 

This happens in the simplest way when  one builds the differential equations of the geodesic line by direct execution of the variation, and reads out the components from these. 

The differential equations of the geodesic line for the line element (9) result from the variation immediately in the form:

...

The comparison with (2) gives the components of the gravitational field:

...

(the other ones are zero).

Due to the rotational symmetry around the origin it is sufficient to write the field equations only for the equator (x2 = 0); therefore, since they will be differentiated only once, in the previous expressions it is possible to set everywhere since the beginning 1 − x


equal 1. The calculation of the field equations then gives



Besides these three equations the functions f1, f2, f3 must fulfil also the equation of the determinant

...

For now I neglect (b) and determine the three functions f1, f2, f4 from (a), (c), and (d). (c) can
be transposed into the form

...

This can be directly integrated and gives

... = αf1, (α integration constant)

The addition of (a) and (c’) gives

...

By taking (d) into account it follows

...

By integrating

...

By integrating once more,

...

The condition at infinity requires: λ = 1. Then


Hence it results further from (c”) and (d)

...


By integrating while taking into account the condition at infinity

...

Hence from (d)

...

As can be easily verified, the equation (b) is automatically fulfilled by the expressions that we found
for f1 and f2.

Therefore all the conditions are satisfied apart from the condition of continuity. f1 will be
discontinuous when


...


In order that this discontinuity coincides with the origin, it must be

...

Therefore the condition of continuity relates in this way the two integration constants ρ and α.
The complete solution of our problem reads now:

...

where the auxiliary quantity


...

has been introduced.

When one introduces these values of the functions f in the expression (9) of the line element
and goes back to the usual polar co-ordinates one gets the line element that forms the exact solution
of Einstein’s problem:

...

The latter contains only the constant α that depends on the value of the mass at the origin.

§5. The uniqueness of the solution resulted spontaneously through the present calculation.

From what follows we can see that it would have been difficult to ascertain the uniqueness from
an approximation procedure in the manner of Mr. Einstein. Without the continuity condition it
would have resulted:

...

When α and ρ are small, the series expansion up to quantities of second order gives:

...


This expression, together with the corresponding expansions of f2, f3, f4, satisfies up to the same accuracy all the conditions of the problem. Within this approximation the condition of continuity does not introduce anything new, since discontinuities occur spontaneously only in the origin. 

Then the two constants α and ρ appear to remain arbitrary, hence the problem would be physically undetermined. The exact solution teaches that in reality, by extending the approximations, the discontinuity does not occur at the origin, but at 


...


and that one must set just ρ = α

...

for the discontinuity to go in the origin. With the approximation in powers of α and ρ one should
survey very closely the law of the coefficients in order to recognise the necessity of this link between
α and ρ.


## §6. Finally, one has still to derive the motion of a point in the gravitational field, the geodesic line corresponding to the line element (14). 

From the three facts, that the line element is homogeneous in the differentials and that its coefficients do not depend on t and on φ, with the variation we get immediately three intermediate integrals. 

If one also restricts himself to the motion in the equatorial plane (ϑ = 90o , dϑ = 0) these intermediate integrals read:


...

From here it follows



If one introduces the notations: c 2/h = B, (1 − h)/h = 2A, this is identical to Einstein’s equation (11), loc. cit. and gives the observed anomaly of the perihelion of Mercury. 

Actually Mr. Einstein’s approximation for the orbit goes into the exact solution when one substitutes for r the quantity

Since α/r is nearly equal to twice the square of the velocity of the planet (with the velocity of light as
unit), for Mercury the parenthesis differs from 1 only for quantities of the order 10−12. Therefore r is
virtually identical to R and Mr. Einstein’s approximation is adequate to the strongest requirements
of the practice.

Finally, the exact form of the third Kepler’s law for circular orbits will be derived. Owing to
(16) and (17), when one sets x = 1/R, for the angular velocity n = dφ/dt it holds

...

For circular orbits both dx/dφ and d
2x/dφ2 must vanish. Due to (18) this gives:

...

The elimination of h from these two equations yields

...

Hence it follows

...

The deviation of this formula from the third Kepler’s law is totally negligible down to the surface
of the Sun. For an ideal mass point, however, it follows that the angular velocity does not, as with
Newton’s law, grow without limit when the radius of the orbit gets smaller and smaller, but it
approaches a determined limit

...


(For a point with the solar mass the limit frequency will be around 104 per second). This circumstance could be of interest, if analogous laws would rule the molecular forces.
