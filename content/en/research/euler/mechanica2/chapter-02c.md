---
heading: Chapter 2c
title: "THE MOTION OF A POINT ON A GIVEN LINE IN A VACUUM"
date: 2025-03-20
weight: 4
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
c: "darkgoldenrod"
---


PROPOSITION 25. Problem.

224. If a body is drawn downwards by some constant force, to find the curve AM (Fig.
32), that a body descending on that curve presses upon equally everywhere.

Solution.

Let AM be the curve sought ; with the abscissa to the
vertical called AP = x, the applied line PM = y and the
curve AM = s. Again let the force acting on the body at
M be equal to P and the height corresponding to the
speed at A = b; [p. 98] the height corresponding to the
speed at M = b + Pdx , with the integral Pdx thus
∫
∫
taken in order that it vanishes on making x = 0. With
these in place the compression force that the curve
sustains along the normal MN is equal to
(83) with the element dx taken as constant [i. e. x is the
independent variable]. 

Now since this force has to be
constant, it is put equal to k, then we have :
But if ds is made constant, then we have
Pdy
[which amounts to the starting condition where k = ds , as the centrifugal effect on the
curve is zero when y is incremental initially. The different ways of expressing the radius of curvature should also be noted : In this case, if ds is constant, then from
ds 2 = dx 2 + dy 2 we have 0 = dxddx + dyddy , and in an obvious notation, we have
dyddy
cos θ = dx
from which − sin θdθ = ddx
= − dxds
ds
ds
dyddy
dyddy
ddy
ds =
and hence dθ = dxds × sin1 θ = dxds × dy
. Hence R = ddsθ = dsdx
dx
ddy
is the required radius of curvature.]
the integral of which is :
This [differential] equation can be constructed, as P is given in terms of x, and since y is
not present in this equation, but only dy. Q.E.I.

Corollary 1.

225. The integral
expresses the time in which the body starts from A, with the same initial speed as that
with which it is moved along AM, and falls straight down through the height AP, and
∫
( b + Pdx ) gives the speed at the same place. Whereby this speed at P divided by the
time to traverse AP gives 2kds
, from which property the curve AM can be determined.
dy
[Thus the quantity 2kds
, related to the angle of projection at A, is determined from special
dy
values of the time and speed in the above equation, which is used further.]

Corollary 2.

226. Moreover the time to traverse the distance AP can be increased by any constant
quantity, for example
c , [i. e. in the ratio b ]. And from this constant magnitude the
c
angle which the curve at A makes with AP is determined. [The sine of the angle between
dy
the vertical axis and the curve at A is of course ds , and 2kds
=
dy
b
; thus, increasing c
c
makes the angle greater, up to a certain allowable value ] Clearly the sine of the angle is
equal to k c with the total sine put equal to 1. Whereby c cannot thus be taken greater
2 b
than 2 k b , and if the body starts at rest from A, then c must be equal to 0.

Example. [p. 99]

227. Let the force be uniform or P = g; then we have :
[Note that the time has been increased by the added constant 2kg c ] hence we have :
and
dy
From which the following equation arises, [noting that dx
= 1 − ( ds )2 ]:
ds
Let
( b + gx ) = t and − c + b = h; then
Therefore with these substituted, we have :
This equation allows the integration for three cases, the first of which occurs for k = 0; for
then the curve is found that a body describes freely projected from A. The second case is
dy
when h = 0 or b = c ; for then we have ds = kg or the line satisfying the equation is an
inclined straight line. If in the third case k = g or the total compression force is
everywhere equal to the force g acting on the body, then the equation becomes :

the integral of this is :
This constant, since with x = 0 or t = b makes y = 0, must be equal to :
Therefore with ( b + gx ) restored in place of t and by placing
found that :
b − c = h = a , it is
Which is the equation of the curve sought, in which a must be a number less than b. [p.
100]
If the body must fall from rest, any other line besides a straight line is not satisfactory.
Indeed it it must be the case that c = 0, in order that the angle at A is real, and therefore
the equation is put in place :
Corollary 3.
228. An algebraic equation found, if it is to be free from irrationality, can be made of
order five. If a = b is put in this equation, in which case the tangent of the curve at A is
vertical, and gives :
Corollary 4.
229. If in general the tangent at A is to be vertical, then c = 0 and thus this equation
arises :
If the tangent at A is placed horizontal, then k c = g b and this equation arises :


Scholium.

230. This curve is called the line of uniform pressing [ above we have called this the compression force, and of course it refers to the normal reaction force exerted on the body by the fixed curve having constant magnitude, although the reaction of this force is usually considered in the text; 

It is inappropriate to use modern terms, while 'pressing' or 'squeezing together' seems too vague. Again, the derived word 'pressure' has a different meaning now, and cannot be used. Remember that many of the latin words recruited by Euler are given different mathematical meanings from those originally found in the dictionary. Even the word 'expression' seems to relate to extracting the juice of the grape. All part of the fun of being Euler, I suppose, and although he was a person of great piety - see some of his Letters to a German Princess, he nevertheless had a sense of humour.] and the solution of this problem is set out in the Comment. Acad. Paris., which agrees uncommonly well with our solution.

(G. F. De L'Hospital (1661 - 1704), Solution d'un problème physico-mathématique,
proposé par Iean Bernoulli, Mém. de l'acad. d. sc. de Paris 1700, p. 9. See also the study
by P. Varignon (1654 - 1722), Usage d'une intégrale donnée par G. F. De L'Hospital, ou
sur les pressions des courbes en général, avec la solution de quelques autres questiones
approchantes de la sienne, Mém. de l'acad. d. sc. de Paris 1710, p. 158. References by P.
S.)
The other case agrees with this solution, if the force is not constant, but for whatever the
variable P, the equation found is nevertheless integrable, if the compression on the curve
should be proportional to P. [p. 101] For it becomes k = mP and the following equation is
produced for the curve sought :
the integral of which is :
This equation, if c = 0, is for a straight line inclined to the horizontal. But the angle is
defined by c , which the curve makes with the vertical at A; indeed the sine of this angle
is m + m c . Whereby if we take
b
c = − b , the curve is a tangent to the vertical at A.
Besides, this curve has the property that the time in which the arc AM is traversed is
proportional to m • AM − PM . Finally from the solution of this proposition flows the
solution of the following, in which from the given curve and the equal compression of the
curve, the magnitude of the force acting downwards is sought.


PROPOSITION 26. Problem.

231. With the curve AM (Fig. 32) given, and with the initial speed at A corresponding to
the height b, to find the size of the force always acting downwards, which arises in order
that a body descending along the curve AM exerts the same force everywhere on the
curve.

Solution.

Let the force acting sought be equal to P, and with
these lengths named : AP = x, PM = y et AM = s and the
force that the curve sustains is equal to k , this equation is
put in place :
(224), in which ds is made a constant element. Therefore
from this equation the quantity P has to be elicited. [p.
102] Moreover, the equation multiplied by dy and
integrated gives :
from which there arises :
which differentiated gives :
But the integral
kds
dy 2
∫ dxdy thus has to be taken, in order that with x = 0 it becomes
∫ dxdy = b. Moreover , so that this integration can advance easier, putting dy = pdx ;
then we have
and thus,
From which equation there is produced :EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 149
Q.E.I.
Corollary 1.
232. From this equation the speed of the body at the individual points is also found at
once; for the height corresponding to the speed at M is
Now the time, in which the arc AM is completed, is equal to
Corollary 2.
233. It is evident from the equation found that the magnitude of the force P is therefore to
be greater where k is greater from the other terms; for the value of this variable has been
multiplied by the compression k.
Corollary 3.
234. Although now the force P is not seen to depend on the initial speed b, [p. 103]
because b is not present in the expression, yet P depends on b on account of the integral
∫ ( 1+ pp ) , which must thus be taken, in order that with x = 0 it becomes
k ( 1+ pp )
pdx
∫ ( 1+ pp ) = b. Hence with the initial speed varying other forces acting are
p
pdx
2
produced, even if the the proposed curve remains the same.
Exemplum 1.
235. Let the curve AM be a parabola having the vertex at A and the axis horizontal, thus
so that is is given by ay = x 2 . Therefore we have dy = 2 xdx
and hence p = 2ax and
a
Whereby


Since this quantity must be equal to b, if x = 0, then C = −2a or

From which it is found :
Therefore at the point A the force P is indefinitely small; as the numerator as well as the
denominator vanish the value of this expression is equal to zero. Now the speed at A
cannot be made arbitrary, also if the the constant C is seen to be determined from b. For
C has only such a value which the expression
returns of finite magnitude. Therefore b depends on a and the value of this can be found,
if we put x = 0 in the expression
Moreover, there is produced then b = ka
. [p. 104] Therefore the descent must begin with
4
this speed, in order that the compression that arises is everywhere equal to that found
from the force P.
Example 2.
236. Let the curve AM be a circle of radius a touching the line AP at A; then it is given by
y = a − ( a 2 − x 2 ) and p =
x
, and also
( a − x2 )
2
( 1 + pp ) =
a
.
( a − x2 )
2
Therefore the integral
1+ pp
2
to which it is not required to add a constant, because pp = a 2 becomes infinite with x
x
vanishing. Therefore the equation becomes :
whereby the speed of the bvody is uniform and thus the force acting vanishes. It is
evident that the body is progressing uniformly on the circumference of the circle with no
force acting and the centrifugal force everywhere is of the same magnitude.EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 151
Example 3.
237. Let the curve AM be a cycloid having the base horizontal and with the cusp a tangent
to the vertical AP at A, thus so that the equation becomes :
Therefore we have :
Whereby the equation becomes :
and
Therefore with the constant C taken of finite magnidute making b =∝ ; whereby making C
= 0 ;then
and b = 0. Therefore there is produced :
Thus if the body descends on the cycloid AM from A from rest and is acted on by a
downwards force [p. 105], which varies as the square root of the abscissa AP, the body is
everywhere acted on by a constant force.
Scholium.
238. Therefore cases are given, in which the speed
b cannot be assumed at will, as has
1+ pp
come about in these examples. For as often as pp is made infinitely large by making x
= 0, a constant in the integraton of
pdx
has to be added, and generally this is itself
( 1+ pp )
determined because the initial speed cannot be infinitely large. But always, if the curve is
1+ pp
a tangent to the line AP at A, then pp becomes infinite with x = 0, since that is also the
reason in other examples considered why the initial speed cannot be made arbitrary.EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 152
PROPOSITION 27.
Problem.
239. If a body is always drawn downwards by some force, to find the curve AM (Fig. 32),
upon which the body is thus moving, in order that the total compression force sustained
by the curve has a given ratio to the compression arising from the normal force.
Solution.
The body descends from A with a speed
corresponding to the height b and on placing AP = x,
PM = y and AM = s and let the force acting on the body
at M be equal to P; [p. 106] the height corresponding to
the speed, that the body has at M , is equal to b + Pdx ,
∫
now the total force of compresseion that the curve
sustains at M following the direction of the normal MN,
is equal to
on taking ds for the constant element. Now this
compression force is in the ratio m to 1 to the normal
Pdy
force ds ; hence
which is the equation of the curve sought. Now this can be reduced by putting v in the place of
∫
b + Pdx , to this form :
which integrated gives :
m −1
2
dy
From which there is obtained [as ds = sin θ = v m−1 , etc.]:
a 2
which is the equation of the curve sought. Q.E.I.EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 153
Corollary 1.
dy
240. The speed of the body is zero there, where ds = 0 or where the tangent of the curve
is vertical, if indeed m2−1 is a positive number or m is greater than one. Therefore in these
cases we put the curve to be a tangent to the line AP at A and the initial speed or b = 0.
[p. 107]
Corollary 2.
241. Whereby if m > 1, or if the total compression force is greater than the normal force
arising, the curve sought is given by this equation :
in which
∫ Pdx thus must be taken so that it vanishing with x = 0.
Corollary 3.
242. Whereby if m = 1, the centifugal force vanishes and therefore the line sought is
straight. Moreover from the equation we have ddy = 0, which is the property of a straight
line.
Corollary 4.
243. If m = 0, then the total pressing force vanishes; whereby there is then produced the
curve, that the body freely described, projected with a speed corresponding to its height
b. Therefore for this curve this equation is found :
Corollary 5.
244. If m is less than one, then the centrifugal force is in the opposite direction to the
normal force and therefore the curve AM is concave downwards. Therefore we put the
curve to be normal to AP at P ; and b = a. Therefore with b = a , this equation is found
for the curve sought :EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 154
Corollary 6. [p. 108]
245. Therefore for the free motion, in which case m = 0, this curve described is found for
the body, if it is projected horizontally from A with a speed corresponding to the height a,
from this equation :
Example 1.
∫
246. Let the uniform force acting or P = g; then we have Pdx = gx. Hence in the cases
in which m > 1 and the body descends from being at rest at A, the equation for the curves
sought with gc written in place of a is this :
But if m < 1 and the body is projected from A horizontally with a speed corresponding to
the height a, the curve upon which the body must be moving, with gc written in place of
a, is shown by this equation :
These curves are therefore algebraic, if either 23m−−m2 or 1−mm is a positive whole number.
Now this comes about if m is a term of either this series 3, 53 , 75 , 97 , 11
etc. , or of this
9
series 0 , 12 , 23 , 34 , 54 , 56 etc. [e. g. on setting the expression squared equal to xm]
Corollary 7.
247. Therefore if the total compression force is three times greater than the normal force,
then the curve is a circle touching the line AP at A. [p. 109]
For it becomes the equation of the circle of radius c :EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 155
Corollary 8.
248. If the total compression force is twice as great as the normal force or the centrifugal
force is equal to the normal force acting in the same way ; then the curve is a cycloid with
the vertical cusp a tangent at A. For the equation is given by :
Example 2.
249. Whatever the force acting P should be, curves of the same kind are required, in
order that the total compression that the curve sustains, is twice as large as the normal
force or as the centrifugal force, which in this case that will be the equation. Therefore
putting m = 2 , and this equation is found for the curve sought :
∫
Or by calling Pdx = X then
We have brought up this example, since in the following curves with this property are
likewise lines of the quickest descent.
Corollary 9.
250. Therefore it is evident that there are endless curves satisfying the question, on
account of the quantity a being arbitrary. And all these boundless curves have a tangent
to the line AP at A.
Scholium 1. [p. 110]
251. It is apparent from the solution of this problem, how the inverse problem can be
solved, in which the curve and the ratio between the total compression force and the
normal force is given, and the magnitude of the force acting downwards is sought. Since
indeed it is
or putting dy =pdx
it becomes
and hence by differentiation :EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 156
Consequently it is found that
Where it is to be noted that the initial speed must now be given ; for the formula
gives b if we put x = 0.
Scholium 2.
252. In a like manner, if the motion of the body or the speed of this is given at individual
points and the relation between the total pressing force to the normal force is given, from
the speed the force acting is found at once. For let v be the height corresponding to the
speed at M; then as b + Pdx = v , P = dv
and the equation [p. 111]
dx
∫
gives the nature of the curve sought. For since v is given, either x or s and constant
quantities have to be given, clearly which are used in expressing the nature of the curve.
Moreover the same problems proposed under the hypothesis of centripetal forces or of
many forces acting do not introduce more difficulties, even if more complex equations
may be reached. And since a simple example in a medium cannot be brought forwards as
an illustration, this I rather abandon, and more towards that [study] which I am about to
set out with great diligence in the following, where the nature of the brachistochrone is
worked through, and curves of the same kind are produced. Now therefore I progress to
that problem, in which a certain property of the motion is proposed, from which
conjointly either the curve is sought with the force acting, or from the curve itself the
force acting. Now the exceedingly easy problems as when either the scale of the speeds
or of the times is given, I omit, since from the expression of the speed or the force acting
either the curve itself comes freely, and an expression of the time to the speed can be
easily deduced. Because of these things, we bring forwards questions, in which neither
the speeds nor the times are given, but certain relations depending on these.EULER'S MECHANICA VOL. 2.
Chapter 2c.
page 157
Translated and annotated by Ian Bruce.
[p. 112]
PROPOSITION 28.
Problem.
253. A body is acted on by some force acting downwards ; to find the curve AM (Fig.
33), on which the body descends in a uniform motion downwards as it is carried forwards
or equally as it recedes to the horizontal AB.
Solution.
On placing AP = x, PM = y, AM = s and the force
acting equal to P , let the initial speed of the body at A
correspond to the height b; the speed at M corresponds
to the height b + Pdx. Whereby the short interval of
∫
time, in which the element Mm is traversed, is equal
ds
to
. Moreover since the motion along AM
( b + ∫ Pdx )
must correspond to a uniform motion along AP, it is
understood that the motion of the body along AP is
with the constant speed corresponding to the height b;
the time to pass through Pp must be equal to the time
to pass along Mm, hence we have the equation : dx =
b
ds
or dy
( b + ∫ Pdx )
b = dx
∫ Pdx.
Moreover I put the initial speed agreeing with the speed of descent, in order that the
curve A is a tangent to the vertical AP and the body in the beginning at first falls in a
straight line. For since the motion on account of the acceleration by necessity is one of
acceleration, in order that the curve continually becomes more inclined to the horizontal,
the initial motion of this is most conveniently taken at A, where the curve is vertical.
Therefore the equation dy b = dx
∫ Pdx. is produced for this curve. Q.E.I.
[We can understand this second equation in terms of the squares of the speeds, which add
according to the right angle rule : The speed downwards is u always, the speed
horizontally is v at the point M, and the speed along ds is V, then V 2 = u 2 + v 2 . Now
∫
u 2 is proportional to b, v 2 is proportional to Pdx with the same constant of
proportionality, from which the equality of the times gives the above equation.]EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 158
Corollary 1. [p. 113]
254. Hence this curve has the property so that when the speed of the body is greater, in
that place the more also is the inclination of the curve to the horizontal.
Corollary 2.
255. Therefore in the highest place, where the speed of the body is the least, the
inclination of the curve must be a minimum or the tangent to the curve at that place must
be vertical.
Corollary 3.
256. Therefore the initial speed b cannot be equal to zero, since the speed is equal to
that respective speed, by which the body progresses downwards as it recedes to the
horizontal AB.
Scholium 1.
257. This curve is called the line of uniform descent, since a body descending on it is
progressing with a constant motion downwards. The discovery of this line is set out in the
Act. Erud. Lips. A 1689 for the hypothesis of gravity, or of a constant force acting. [G.
W. Leibniz, Concerning isochronous lines, in which a weight falls without gravity, Acta
erud. 1689, p. 234]
Moreover, there it is demonstrated that Neil's cubic parabola satisfies this question, the
same as that produced in the following example.
Example 1.
258. Let a uniform force be acting or P = g; then
∫ Pdx = gx. [p. 114] Whereby this
equation is obtained for the curve sought : dy b = dx gx , which on integration gives
9by 2
this equation : 3 y b = 2 x gx or 4 g = x3 , which is the equation for Neil's parabola
with the cusp at A tangent to the line AP , of which the parameter is 49bg . Therefore for
which with another initial speed, another parabola is to be taken.
Example 2.
259. Let the force acting P be proportional to some power of the abscissa increased by a
given line, in order that P =
( a + x )n
; then there arises
fn
∫
Pdx =
( a + x )n+1 − a n+1
.
( n +1 ) f n
On account of which for the curve satisfying this equation, we have :EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 159
If a = 0, thus so that the force P acting is proportional to a power n of the distances of the
body from the horizontal AB, then :
of which the integral is :
or
But n + 1 must be a positive number ; otherwise
∫ Pdx is made infinite, since it must
vanish on making x = 0. Hence n + 3 > 2; whereby the parabolas satisfy the tangents
with the verticals at A tangent to AP. For, if n = 1 or P = xf , the parabola satisfies the
parabola of Apollonius, of which the parameter is 2 2bf .
Scholium 2.
260. From the solution of this proposition it is evident, how the inverse problem of this
can be solved, in which the curve is given, [p. 115] which is a line of equal descent, and it
is required to find the force acting. Since indeed it is given by : dy b = dx
it becomes
∫
Pdx =
∫ Pdx , then
bdy 2
. From which there arises with dx put constant :
dx 2
2bdyddy
P=
.
dx 3
Therefore it is evident that the force P depends on the initial speed b . Now the given
curve thus has to be compared, so that it is a tangent with the vertical AP at A. If the
radius of osculation at M is called r, then
P=
2bds 3 dy
.
rdx 4
Whereby if for example the curve AM is a circle tangent to AP at A, the radius of this is
equal to a, then
Therefore the circle,
Now the speed at M corresponds to the heightEULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 160
Corollary 4.
261. Likewise it is apparent from the equation, that we have found (253),
the time, in which the arc AM is described, is equal to the time in which the body must
move with the constant speed corresponding to the height b, traverses the vertical
distance AP. In this equation clearly the nature of the line of equal descent arises.
[p. 116]
PROPOSITION 29.
Problem.
262. With a constant force everywhere pulling vertically downwards, to find the curve
AM (Fig. 34), upon which a body is progressing uniformly along a given direction AP.
Solution.
Let AM be the curve sought and the tangent AP is
taken as the axis of this curve, which is directed
along the given direction. Hence the problem requires
that the body moving on AM with a uniform force g
acting [down] arrives at M in the same time as a body
moving uniformly, clearly with the speed b ,
traverses the corresponding width of the abscissa AP,
and the initial speed at A corresponds to the height b.
Calling AP = x, PM = y and AM = s and a vertical
line AQ is drawn at Q cutting the horizontal MQ.
Therefore the speed of the body at M is as large as a
body acquires from its own speed b at Q by falling
along AQ ; whereby the speed of the body at M
corresponds to the height b + gz on calling AQ = z.
Now from the condition of the problem it follows that :EULER'S MECHANICA VOL. 2.
Chapter 2c.
page 161
hence this equation arises : dy b = dx gz . But z is given in terms of x and y from the
Translated and annotated by Ian Bruce.
PAQ; let the sine of this angle be equal to m, and the cosine is equal to
the whole sine equal to 1. Now the equation arises :
( 1 − m 2 ) with
from which :
But AO is made equal to
x
. Then as 1 : m = MO : OQ it follows that
( 1− m 2 )
−
Consequently AQ = z = my + x ( 1 − m 2 ) and hence dy = dz
m
dx ( 1− m 2 )
.
m
From which value, substituted into the equation is given :
which is changed into this :
The integral of which is found : [p. 117]
[Formula corrected by P.S.]
Which equation with the value my + x ( 1 − m 2 ) substituted in place of z gives the nature
of the curve sought. Q.E.I.
Corollary 1.
263. Hence the satisfying curve is always a transcendental line, clearly depending on
logarithms, unless m is either 0 or 1, i. e. unless the line AP is either vertical or
horizontal.EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 162
Corollary 2.
264. Therefore if m = 0, the problem agrees with the preceding one; for let z = x and thus
the curve is expressed by this equation dy b = dx gz , which gives the cubical parabola
as above.
Corollary 3.
265. Let m = 1, and the line AP becomes horizontal and z = y. Therefore we have :
Hence this curve is that projection that the body freely describes, projected horizontally
with the speed b at A. For this curve, as it is understood from the above book (567), has
that property so that the horizontal motion is uniform.
Corollary 4.
266. If x and y and consequently z is very small, then
as an approximation. [p. 118] Hence the beginning of the curve AM is expressed by the
equation :
or as z = my + x ( 1 − m 2 ) by this :
which is reduced to this :
Corollary 5.
267. If m = 1, or if the line AP is horizontal, and that series equal to the logarithm is
continued to infinity and this infinite series is substituted in place of the approximation,
all the terms before the indefinitely small ones to ∝ vanish. Moreover it gives the
infinitesimal z = 0 or y = 0, which indicates that in this case the horizontal straight line isEULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 163
also is satisfactory. That which by itself is evident, for the body on the horizontal straight
line is progressing uniformly, and thus the horizontal motion of this is uniform.
Scholium 1.
268. Therefore miraculously it is seen that the differential and integral equation too that
arise if m = 1, only produce a parabola, and the horizontal line is seen to be excluded. But
it is to be noted that the horizontal straight line is also satisfactory for all the directions
AP, since the motion on that is uniform and thus progresses uniformly towards all
directions. Moreover it is evident our general equation cannot include this straight line,
since the line AP is never a tangent except in the case m = 1, so that it agrees with that.
[p. 119] And this is the reason why for the case m = 1 also, the straight line is not able to
be found directly.
Scholion 2.
269. It is also evident also that from the same labour the problem can be solved in a wider
sense, clearly if the force acting is not uniform, but in some manner a variable force is put
in place. In so much as, by putting P in place of g and Pdz in place of gz in the
∫
differential equation, this equation is produced
dy b = dx
∫ Pdz
for the curve sought. Now z has the same value as before. Whereby if P only depends on
the altitude and on constants, then Pdz can be provided either by integration or by
∫
quadrature. And then the equation for the curve can be constructed; for this equation is
arrived at :
in which the variables x and z are separated from each other in turn. But I do not wish to
effect confusion by making the problem more general. Indeed when the problem is
presented with wider significance, neither does it have more difficulty nor is it unsuited
to particular uses, but for that part remaining it is set up to handle only a particular
problem. For the same reason, I resolve the following paracentric isochronous problems
under the hypothesis of uniform forces acting in the downwards direction only.EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 164
[p. 120]
PROPOSITION 30.
Problem.
270. Under the hypothesis of a force acting uniformly and tending downwards, to find
the curve AM (Fig. 35), upon which a body descends uniformly receding from a given
point Ct.
Solution.
Let AM be the curve sought; the tangent
CA is taken, which passes through the given
point C ; the speed of the body at A is a
minimum. Indeed since the total speed at C
is devoted to moving away, in other
elements of the curve it is necessary, since
the speed is greater, that only a part of this
is taken for receding. The point A is
therefore the highest point of the curve
sought. Therefore let the speed of the body
at A correspond to the height b and with this
speed the body begins to move uniformly
along AP ; and thus this motion with the
descent of the body agrees with the motion
along the curve AM , so that at any point P
and M equally distant from C is reached at
the same time. With the speed at M
corresponding to the height b and taking CP
= CM = x and let the sine of the angle PCM
= t with the total sine taken as 1. The circular arcs PM and pm are drawn with centre C;
then Mn = Pp = dx and the sine of the angle pCm is equal to t + dt. Whereby we have :
Therefore we have [p. 121]
:EULER'S MECHANICA VOL. 2.
Chapter 2c.
page 165
v must be described in the same time as the
Translated and annotated by Ian Bruce.
Hence since the element Mm with the speed
element Pp with the speed b , it becomes :
or
Therefore it is required that v is determined. In order to do this, the vertical CQ is drawn
from C and the horizontals AD and MQ; therefore after the body as descended from A to
M, it has fallen by the interval DQ. Whereby with the force acting put as g, then we have
:
Let AC = a, the sine of the angle ACD = m; and the cosine is equal to
( 1 − m 2 ) , thus
CD = a ( 1 − m 2 ) and
On this account :
From which is constructed :
In which with the value v substituted there is produced this equation :
or this :
Which equation expresses the nature of the curve sought, and if the indeterminates x and t
can be separated from each other in turn, then the curve can be constructed. Q.E.I.
Corollary 1.
271. Therefore it is evident from the equation found that there are innumerable curves to
satisfy the question, on account of the three quantities : clearly the angle ACD, the
distance AC and the speed b , from which the body recedes from the fixed point C,
which can be varied as it pleases.EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 166
Corollary 2. [p. 122]
272. And of these three quantities, any two can be assumed arbitrarily and from the third
variable only an infinite number of curves are produced satisfying the question. But since
this equation cannot be constructed generally, all the satisfying curves cannot be shown.
Corollary 3.
273. Because it restrains the figure of these curves, it is understood that all these must
have the same cusp at A, because A is the highest point. Otherwise indeed a branch of the
curve from A must descend to another part of the line AP, with the exceptional case in
which CAP becomes a horizontal line ; for then this argument comes to an end.
Corollary 4.
274. Now another branch put equal to another part of the line CP solves the problem and
gives rise to that AM. Indeed it is found from the same equation, but if t or the angle PCM
is taken negative.
Corollary 5.
275. But from the single equation found, by inspection it is evident that for two cases the
indeterminates can be separated, of which the one is, if a = 0, and the other if m = 1.
Clearly in that case the distance AC vanishes and the point A is incident on C; now in this
case the straight line CP is made horizontal. [p. 123] We explain both these cases in the
following two examples.
Example 1.
276. Hence the point A is incident on C, or the descending body begins from the point C
itself; making a = 0. Therefore in this case the equation for the curve sought changes to
this :
in which the indeterminates are separated from each other. Therefore the construction of
the curve sought can be made by quadrature ; indeed it becomes :
which integration can thus be completed, in order that on making t = 0 , then x = 0. And
for the general equation thus to be integrated, as by putting t = 0 makes x = a. Therefore
in this case the integralEULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 167
thus can be taken so that it vanishes by making t = 0. Now in the construction of this
integral it is observed to be better if I put the cosine of the angle MCQ or
with which done it becomes the sine of the angle MCm or
With these substituted this equation is obtained :
which integral can thus be accepted, as on making q = ( 1 − m 2 ) it becomes x = 0.
Corollary 6.
277. If different values of b are given, all the curves which arise are similar to each other
; [p. 124] for with the angle MCP maintained, the proportional distance CM is taken for
b, the height generating the initial speed.
Corollary 7.
278. Therefore whatever the angle ACQ may be, the construction is not changed, but only
a constant is to be added. Whereby the construction serving one case can accommodate
all the cases.
Scholium 1.
279. This problem concerned with uniform recession from a fixed point previously was
proposed and solved in the Act. Lips. A. 1694 and the solutions presented there agree
extremely well with the case of this example; indeed the general solution was not given
in that place. On account of which the case of the following example is clearly seen to
give anew curves satisfying this equation. But since the following construction agrees
with that, though the curves are clearly different, yet also the following case for these,
which are treated here concerning this, is considered to be contained. Moreover, curves of
this kind are called paracentric isochrones, since the motion upon these is uniform from
a fixed centre.
(Iac. Bernoulli, Solutio problematis Leibnitiani, de curva accessus et recessus aequabilis
a puncto dato, mediante rectificatione curvae elasticae, Acta erud 1694, p. 276; Opera,
Genevae 1744, p. 601.EULER'S MECHANICA VOL. 2.
Chapter 2c.
Translated and annotated by Ian Bruce.
page 168
Iac. Bernoulli, Constructio curvae access et recessus aequabilis, ope rectificationis
curvae cuiuseam algebraicae, Acta erud 1694, p. 336; Opera, Genevae 1744, p. 608.
G. W. Leibniz, Constructio propria problemis de curva isochrona paracentrica, Acta
erud 1694, p. 364; Mathematische Schriften, herausgegeben von C. I. Gerhardt, 2.
Abteilung, Band 1, Halle 1858, p. 309; see also Iac. Bernoulli, Opera omnia, Genevae
1744, p. 627.
Ioh. Bernoulli, Constructio facilis curvae recessus aequabilis a dato puncto, per
rectificationem curvae algebraicae, Acta erud 1694, p. 394; Opera Omnia, Tom. I,
Luasannae et Genevae 1742, p. 119.)
Example 2.
280. Let the line CAP be horizontal; put m = 1 and the term ga ( 1 − m 2 ) vanishes in the
general equation. [p. 125] Therefore in this case the equation becomes separable as
before ; for the general equation is transformed into this :
which integral can thus be taken, as on placing t = 0 it becomes x = a. Whereby
dt
thus on integration, as it vanishes with t = 0, hence :
3
∫ ( t −t )
Which construction hence agrees with the preceding.
Scholium 2.
281. Whether besides these two cases others are able to be found, that admit separation of
the indeterminates, I doubt very much. Certainly no one, as far as I know, has elicited
another, on account of which I judge that it is not necessary to tarry longer over this
material.

