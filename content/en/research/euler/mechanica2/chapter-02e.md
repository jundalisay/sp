---
heading: Chapter 2e
title: "The Rectilinear Motion Of A Free Point Acted On By Absolute Forces"
date: 2025-03-20
weight: 4
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
c: "darkgoldenrod"
---


THE MOTION OF A POINT ON A GIVEN LINE IN A VACUUM.

## PROPOSITION 36. Problem.

328. With a uniform force g acting downwards everywhere, to find all the curves AMC
(Fig. 41), upon which a body descends from rest at A in a given time to a straight line BC
inclined at any angle to the horizontal. .

Solution.

The applied line BD of the curve AND
expresses the time, in which the body from A
reaches the line straight BC, and from any
point M the straight line MQ is drawn parallel
to the given line BC, on cutting the vertical AB
at Q, and QN expresses the time in which the
body has traversed the part AM . Whereby, if
an infinitude of curves AND are considered,
which all have the same applied line BD at B,
all these generate curves AMC, upon which the
body in the given time arrives at BC from A.
Moreover the curves AND, as advised above,
must concur at A with the vertical AB and as far
as D must diverge from AB. Now putting the tangent of the angle ABC = k, and putting
y
y
AP = x, PM = y, AQ = u, QN = t and AB = a; then PQ = k and thus x + k = u .
Moreover since the speed at M must correspond to the height gx, the time to traverse AM
=
∫
dt =
( dx 2 + dy 2 )
gx
, which has to be equal to QN = t ; therefore we have exactly
( dx 2 + dy 2 )
gx
and gxdt 2 = dx 2 + dy 2 . But on account of the given curve AND, t is
y
given in terms of u, and since u is given by u = x + k , t is given by x and y ; on accountEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 239
of which the equation is obtained between x and y for the curve sought AMC. Or since
we have y = ku − kx , then the equation becomes :
gxdt 2 = ( k 2 + 1 )dx 2 − 2k 2dudx + k 2du 2
and [p. 152] it is allowed to find x in terms of u . In order to do this, let dt = pdu , [i.e. p is
the gradient of the AND curve with the abscissa u vertical] then
gxp 2du 2 = ( k 2 + 1 )dx 2 − 2k 2dudx + k 2du 2
and
dx =
k 2 du ± (( g ( k 2 +1 ) p 2 x − k 2 )du 2 )
.
k 2 +1
Therefore the curve AND must be taken everywhere such that [the gradient] p is greater
k
than
. Moreover that equation must be integrated thus, so that on making u =
2
gx( k +1 )
0 it becomes x = 0. With which done, the equation between x and y for the curve sought
can be obtained. Q.E.I.
Corollary 1.
329. The curve AMC is a tangent to the straight line AB at A, if dy = 0 on putting x = 0;
now it must then be the case that du = dx and 1 = ( g ( k 2 + 1 ) p 2 x − k 2 ) . Whereby this
comes about, if on making ppx = 1g on making x = 0. Moreover since in this case y is
infinitely smaller than x, in the beginning x = u; from which it follows that the curve
AMC is a tangent to the vertical AB at A, if ppu = 1g with u = 0. [Note that this
degenerates to the equation dx = gdt 2 in the neighbourhood of A, on setting du = dx,
recognisable as an equation of motion; the customery 12 is missing as usual, as all such
expressions involving free fall are compared against each other by Euler, rather than dealt
with in an absolute manner, which could not be done at the time, due to the lack of an
adequate set of units. The reader has no doubt observed that two curves are always used
in these demonstrations : AND is the vertical displacement x versus time t, while AMD is
the vertical displacement x versus horizontal displacement y. ]
Corollary 2.
y
ydy
330. Then the normal to the curve AMC is along QM, if PQ = k = dx or
2
dx = kdy = k 2du − k 2dx or dx = k 2 du . Now this eventuates [from above]
k +1
when p 2 x =
kk
.
g ( k 2 +1 )
Corollary 3.
331. At the point A, the expression ppx either has a finite value and that is greater than
kk
the value
it has on making x = 0 [one presumes that Euler has in mind by this
2
g ( k +1 )EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 240
statement, taking the limit as x tends towards zero], or it is infinitely great. In the latter
dy
2
case [ dx = k 2 du ] becomes dx = ± ∝ du , and since du = dx + k , then dy = −kdx , [as
k +1
du = 0 ; p. 153] In which cases, the tangent to the curve AMC at A is parallel to the line
dx
BC.
Example.
332. Let the curve AND be any parabola, so that thus
t = 2α u ;
g
then
dt = αdu and p = α ,
gu
hence this equation is obtained [from dx =
gu
k 2 du ± (( g ( k 2 +1 ) p 2 x − k 2 )du 2 )
]:
k 2 +1
The integral of this equation is :
with
with
[Clearly a convenient way to demonstate this integral is to assume the final form, and to
differentiate the logarithms of this product, at which point an attempt is made to generate
the given differential equation by equating coefficients and making use of partial
fractions. Note that the l.h.s. of the differential equation is the derivative of part of the
numerator of the r.h.s., while the rest is du . Euler concerns himself with this aspect
u
below.]
[If α < 1 , then B and hence also the number ρ is a positive number.] Therefore since
the number π is a negative number, then
where C denotes a constant, which is effected so that on putting x = 0, u = 0 also.
Moreover it is clear, whatever the constant should be, that always u = 0 on
making ρ or π to disappear. But it is not possible for π to vanish, and in this case ρ now
vanishes, since α = 1 ; therefore in this case it must be that C =∝ and the equation
becomesEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 241
or u = x and y = 0; whereby in this case the condition for the vertical line AB is satisfied.
For the remaining cases, since C is now an arbitrary quantity, from one curve AND
innumerable curves AMC can be found.
Again the single case has to be treated on its own, if A = B or
for then it becomes :
with arising
Consequently for this case this equation is obtained : [p. 154]
where C too does not have to be found.
If α > 1 , then B and hence ρ too becomes a negative number; then it follows that
C =∝ . Hence in this case either
or
Which two equations are for straight lines inclined in a certain manner and passing
through A and these also are satisfactory in general. So if we have α = 1 , then A = 1 and
B = 0 and hence these equations
which is a straight line perpendicular to BC; for this is traversed by a body in the same
time as the vertical AB.
Corollary 4.
332a. [Numbering error] Therefore other than α > 1 or α = 1 , innumerable curved lines
can be found that satisfy the problem; hence all are completed in a smaller time than the
perpendicular AB.
Corollary 5.
333. Therefore since an infinitude of curves AMC are able to arise from the one curve
AND, it is readily understood that infinitely more curves satisfying this question than in
the preceeding.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 242
Corollary 6. [p. 155]
334. If α < 1 then the determination of the constant C can be brought about, so that the
curve sought passes through a given point on the line BC. The for other assumed curves
AND in a similar manner an infinitude of curves can be found, upon which the body ont
only reaches the given line BC in a given time, but reaches some given point C on that
line.
Scholium 1.
335. In this example two cases occur in which α = 1 ; indeed in the first in turn only the
vertical line satisfying the problem has been found, and in the other besides this line the
other inclined straight line has been found, yet we have used both in the same way in the
general equation. Moreover now more often cases of this kind are touched upon, in which
the differential equations contain amongst themselves the integral equations, which
nevertheless cannot be expressed by integration. As in the case α = 1 , this has the
differential equation
which on integration gives x = u. Yet meanwhile it is evident that this equation
k 2u = ( k 2 + 1 )x is contained in that too, even if it cannot be produced by integration.
And on this account the equation is equally satisfied by the latter integral as the former
x = u. Hence it is permitted generally to gather together the differential equation into the
form
dt = Vdu ,
T
in which T is such a function of t, which vanishes on putting t = 0, and V is some function
of u, equally understood that this integration vanishes when t = 0 and this [p. 156]
dt = Vdu ,
T
∫
∫
is is elicited by integration. Indeed generally the case t = 0 can be disregarded if t a
simple quantity; but if t is a composit quantity as in our case, it is wrongly omitted. We
had a similar case above (300) in the equation
where we observed the equation x = a to be contained in that, even if it could not be
integrated by integration. For on putting a − x = t then − dx = dt and
is a function of t, which becomes equal to zero, if we make t = 0 or x = a; in as much as
Pdx is thus prescribed to be accepted, so that it vanishes on putting x = a. Hence on
∫
putting this function of t equal to T the equation becomes ds = dtT b , hence in which
equation it is allowed to conclude without risk that the equation t = 0 or x = a is satisfied,EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 243
and thus the circle to satisfy that problem, as we agreed upon there (303). More generally
, if T does not vanish on putting t = 0, it is understood that
now in this equation Vdu = dt
T
the equation T = 0, from which t is equal to some constant quantity and thus dt = 0.
. And
Hence it is understood that T = 0 is contained in the proposed equation Vdu = dt
T
hence, if t should be a composite quantity for argument's sake from u and x, then the
equation of the integral is not likely to be had at once by integration.
Scholium 2.
336. Here the case remains, which requires a particular resolution, [p. 157] when the
straight line BC meets the line BA above the point A, and when it is parallel. But we
consider only the case in the following problem, in which BC is made parallel to the
vertical line AB and put at a given distance ; from which in a similar manner the case of
the line inclined at some angle can be deduced.
PROPOSITION 37.
Problem.
337. Let the body be always acted on by a constant uniform downwards force g ; to find
the innumerable curves upon which the body, starting to move from rest at A (Fig. 42),
arrives at the vertical lineEC in a given time.
Solution.
Let AMC be any of the curves sought and the vertical line
AB is taken for the axis; calling AP = x, PM = AQ = y; then the
speed at M corresponds to the height gx and the time for AM is
equal to
( dx 2 + dy 2 )
∫
gx
Again let AND be a curve, of which any applied line QN
expressed the time for AM, and let QN = t be a function of y;
from the given curve AND it is possible to find the curve AMC.
Whereby if an infinity of curves AND are considered, which all
have the common point of apllication DE at E, all produce the
curves AMC, upon which in a given time expressed by DE
arrive at CE from A. And thus the equation becomes ;
t=
and on putting dt = pdy it becomes :
∫
( dx 2 + dy 2 )
gxEULER'S MECHANICA VOL. 2.
Chapter 2e.
page 244
Translated and annotated by Ian Bruce.
gp 2 xdy 2 = dx 2 + dy 2 and dx = dy ( gp 2 x − 1 )
[p. 158] Which thus on integration, since putting x = 0 makes y = 0, gives the curves
sought AMC.
Let R be some function of y and Rdy thus taken, so that it vanishes on putting y = 0.
∫
Then it becomes
∫ Rdy = A with y = AE = a and with DE = b arising, taking
t=
b ∫ Rdy
;
A
there becomes :
Which equation, whatever is substituted for R, gives innumerable curves satisfying the
question. Q.E.I.
Corollary 1.
338. Therefore in the simplest case, if we put R = 1; then indeed a separable equation is
y b
produced. Now it becomes t = a
becomes
as A = a. hence on this account the equation
But which is of no use as the value of y is imaginary.
Corollary 2.
339. Moreover since
( gbR 2 x − A2 ) cannot be an imaginary quantity, it is required that
2
R2 x > A
; even if x = 0. Whereby R neither can be a constant quantity nor a function of
gb
y, which vanishes on making y = 0. Hence on this account R must be such a function of
y, which becomes infinite, if y = 0. Yet besides it must be a function of the kind, such that
Rdy is not made infinite, which comes about if we should make R = 1y or 12 etc.
∫
y
Example. [p. 159]
340. Therefore we put R =
1
y
; and the integral becomes
∫ Rdy = 2 y and A = 2 a .
Hence this equation is obtained:
Which equation, since it is homogeneous, on putting x = qy; there is foundEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 245
or
gb
On putting 4a = n or (nq - 1) = r then we have
Which latter formula depends on the quadrature of the circle, if n < 2.
Now in the other case n > 2 the integral is :
Which since
becomes equal to this :
Where any constant is allowed to be accepted for C, since the equation thus is
comparable, as on putting x = 0 makes y = 0. Moreover by the method treated above
(335) this integral is at once had from the differential equation :
hence there arises :
which gives two straight lines, unless gb < 8a , in which case the equation is imaginary.
In the case in which n = 2, it becomes
hence it becomes :
or
Also there any quantity can be taken for C.
If n < 2, then the construction of the integal depends in part on logarithms, and in part
on the quadrature of the circle[p. 160] ; indeed on account of the imaginaryEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 246
( n 2 − 4 ) imaginary logarithms are found. Therefore in this case it is expedient for the
construction to be carried out analytically.
PROPOSITION 38.
Problem.
341. Let the body always be acted on by a uniform downwards force g and any curve is
given BSC (Fig. 43) ; to find all the curves AMC, upon which the body by descending
from A in a given time arrives at the given curve BSC.
Solution.
Let any of the given curves sought be AMC, through some point M of this, the curve
MQ similar to the [known]curve BSC with respect to the fixed point A is drawn, and the
applied line NQ expresses the time for the arc AM of the curve AND to be completed;
hence the applied line BD sets out the time for the whole curve AMC to be completed.
With which done, the curve AMC can be found in turn from the given curve AND.
Whereby if an infinity of curves AND is considered, which all have the common line of
application BD at B, these generate the infinity of curves AMC, upon all of which the
body arrives at the curve BSC by descending from A in the given time. If now
AB = a, BD = b and for the arc QM a similar arc BS is cut off from the given curve
BSC; then we have :
AQ : AB = PM : RS = AP : AR = PQ : BR. [p. 161]
Again putting AP = x , PM = y , AQ = u , QN = t , AR = r , RS = s; on account of the given
curve BSC there is an equation given between r and s and on account of the given curve
AND there is an equation given between t and u. But on account of the similitude there is
and x = ur
.
the ratio u : a = y : s = x : r , hence this becomes : y = us
a
aEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 247
Then the speed of the body at M corresponds to the height gx, from which the time to
pass along AM is equal to :
∫
( dx 2 + dy 2 )
gx
,
that must be put equal to t; hence this equation arises gxdt 2 = dx 2 + dy 2 .
Moreover since t is given through u, let dt = pdu and p is a function of u; and because
dx = udr +a rdu and dy = uds +a sdu
this equation goes over into this :
garup 2du 2 = ( udr + rdu )2 + ( uds + sdu )2
But since the curve BSC is given, then s is a function of r and it becomes ds = qdr with q
present some function of r. With these put in place, an equation is obtained between u
and r:
garup 2du 2 = ( udr + rdu )2 + ( uqdr + sdu )2
Which with the square root extracted gives :
From which if the equation between r and u can be found, then likewise the equation
between x and y for the curve sought is obtained.
Moreover since it is restricted to the curve AND, let P be some function of u and thus
Pdu integrated, so that it vanishes on making u = 0 and it becomes equal to A on puttng
∫
u = a; then we can take t =
b ∫ Pdu
for the equation of the curve AND. Hence
A
p = PA b ,
where any allowed function of u can be put in place for the function P. Q.E.I.
Corollary 1. [p. 162]
342. If u is put equal to 0, for that both x and y vanish, unless perhaps r or s become
infinite. Therefore in that case in the integration of differential equation some constant
found can be added, since there is no need that r should have a given value, if u is made
equal to 0.
Corollary 2.
343. Therefore then on account of the arbitrary constant to be added, from one given
curve AND, innumerable curves AMC can be found satisfying what is sought.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 248
Corollary 3.
344. If the curve BSC has thus been prepared, so that neither r nor s is able to become
infinitely great, an infinite number of curves sought AMC are given always from a single
curve AND. Not only do they have this property so that bodies descending on these arrive
at the same time at the given line BSC, but also likewise they can reach any given similar
curve QM .
Corollary 4.
345. Therefore since in the integration of the equation found it is allowed to add some
constant[p. 163], thus that can always be assumed, so that the curve AMC is directed
towards a given point C of the given BSC. And in this way an infinite number of curves
AMC can be found, which all come together at a given point C.
Scholium 1.
346. We have put the curves QM similar to the curve BSC, so that curve itself raised to
A becomes infinitely small and all the points of the curve BSC come together at A and
both x and y vanish on putting u = 0. Moreover in the same manner we have put the
curves QM either to be congruent with BSC, or disagreeing according to some condition.
As Q is some function of u vanishing on setting u = 0 and that goes into B on making
u = a, the curve QM thus is able to depend on the curve BSC, so that it becomes
Qr
Qs
x = B et y = B ;
in as much as on making u = a the curve QM is changed into BSC itself and at A the
curve is changed into the point, unless the curve BSC should become infinite. But also in
this case a funtion can be accepted for Q, in order that, even if on making r =∝ , yet Qr
and Qs become equal to 0, if u = 0. Moreover on putting dQ = Vdu the following general
equation is obtained :
Which equation appears to be the most wide, and from a single curve AND an infinite
number of curves AMC can be furnished, and it can also be supposed that an infinite
number of curves pass through the point C.
Scholium 2. [p. 164]
347. Moreover, however general this equation is, yet the curve QM is similar to the curve
BSC, since it satisfies x : y = r : s. Whereby thus the more general solution can be
shown, in which curves QM dissimilar in some manner can be put in place of the curve
BSC, yet of the same kind, such that QM becomes BSC on making u = a. Now this
solution is obtained, if some function R of u is taken vanishing on making u = 0 and R is
evaluated at D on putting u = a, and it is given by dR = Wdu. Indeed takingEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
Qr
x = B and y = Rs
;
D
page 249
it changes to x at r and y at s, on putting u = a, and with u vanishing as long as x and y
vanish, for whatever r may be. Moreover this most following general equation arises :
In this equation in place of dr, ds can be introduced by putting ds
in place of dr, or even
q
in place of r, and then
in place of r , x can be introduced by putting the value of this Bx
Q
the equation is obtained between u and x. But it should be noted, since Q vanishes on
making u = 0, then P must be such a function of u that P 2Q , on putting u = 0, either
becomes a finite quantity or it becomes infinitely great; but yet one is required to beware,
lest Pdu on being assumed in this manner, becomes infinitely great.
∫
Corollary 5.
348. The equation found in the solution is separable if P = 1 ; it becomes
u
A = 2 a and p =
b
. [p. 165] For there is obtained :
2 au
for s and q given in terms of r.
Corollary 6.
349. In a similar manner the equation of scholium 1 can be separated, if
P 2Q = V 2 or P = V .
Q
For there is obtained :
in which the indeterminates u and r are between themselves in turn separated.EULER'S MECHANICA VOL. 2.
Chapter 2e.
page 250
Translated and annotated by Ian Bruce.
Example 1.
2
350. On retaining P Q = V
2
or
∫ Pdu = 2 Q on account of Vdu = dQ, on putting
n = a , A = 2 B. Hence the equation becomes :
Therefore
∫ Pdu has the required property, so that it vanishes on making u = 0; for Q
vanishes. Now let the curve BSC be a circle described with the diameter AB ; it becomes
s = ( ar − r 2 ) and q =
a − 2r
2 ( ar − r 2 )
and
1 + qq =
a2
;
4( ar − r 2 )
with these values put in place of s and q this equation is produced :
[p. 166] Which equation not only has the indeterminates separated from each other, but
also in general it can be integrated by logarithms ; for indeed in the equation :
with the irrational part to be effected with a rational one. Moreover, this integral is
produced :
Here it is to be noted the case is in agreement, in which gb = 4a or b = 2 a , in which
g
the time for some curve AMC is made equal to the time of descent along the vertical line
AB; for then it becomes :
Therefore if the + sign prevales, then dr = 0 and r = const. = c, hence the equation
becomes :EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 251
s = ( ac − c 2 )
and
which equation gives gives all the chords in the semicircle drawn from A, as we have
now thus shown(102) the times for individual chords are equal to each other. Should the
– sign prevale, then the equation becomes
and hence
Hence the equation becomes
and since s = ( ac − c 2 ) there is obtained
therefore with r eliminated, this equaton is produced (on puting CB = m ) :
y 2 + x 2 = ma xy .
Therefore these curves have this property, so that the arc of these cut by a semicircle are
completed by descending in the same time, clearly in that time in which the chords of the
semicircle are traversed.
Corollary 7. [p. 167]
351. The figure of this is curve is AMFA (Fig. 44), of which the
equation is y 2 + x 2 = ma xy ; clearly the curve has the diameter
AF making a 45 degree angle to the vertical AP, and having a node
at A. But now all these curves are similar to each other and all can
be applied to all circles.
Corollary 8.
352. Therefore if some point M is taken on this curve and through this point and A a
circle is considered crossing the curve, and having the centre on the vertical AP, the body
traverses the arc AM in the same time in which the diameter of the circle or in which the
chord AM is traversed. Whereby this curve has the property that any arc AM is completed
by a body descending from A in the same time as the subtangent chord AM.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 252
Corollary 9.
353. Therefore in this case, in which P 2Q = V 2 (349), likewise, either Q = u or
otherwise; for the same equation is produced between x and y, as this is understood either
from the example or from the equation.
Example 2.
354. With keeping P 2Q = V 2 , so that the equation becomes : [p. 168]
let the curve BSC be a circle described with centre A and with radius AB = a ; then
s = ( a2 − r 2 )
and
With which put in place the following equation is produced :
where gb must be greater than 4a, since r cannot exceed a. Hence at once that radius
becomes known which satisfies the question, on putting
in which case the equation becomes
Hence
which is the tangent of the angle of that radius, upon which the body in the given time
b arrives at the periphery with the vertical AB. In addition, algebraic curves are not
given, since the differential formula cannot be made rational.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 253
Example 3.
355. With the most general equation taken from (347) the straight line BSC is put
horizontal ; then r = a and dr = 0. On account of this in place of dr the value of ds
is
q
introduced, where q is infinitely great. Therefore with the terms deleted, which vanish
before q, this equation arises :
Which equation, since Wdu = dR , and P, Q and V are given in terms of u, can be
integrated. [p. 169] Now it becomes
, but y met vanish
From which equation s can therefore be found. Then, on setting y = Rs
D
on making u = 0, it must be that C = 0, if indeed the integral
is thus taken, in order that it disappears on putting u = 0. Therefore it then becomes :
Which is the general equation for all the curves, upon which the body descents from A to
the given horizontal.
Example 4.
356. The most general equation found above (347) is considere, and the straight line BSC
is put parallel to the vertical AB and at a distance f from that; then s = f and q = 0.
Whereby this equatin is obtained :
Moreover when we set Qr = Bx, with this substituted there is produced :
fR
thus on finding x, y = D . But since in that equation the indeterminates x and u cannot be
separated from each other in turn, it is not possible to derive much from that equation.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 254
Scholium 3.
357. From the general solution of this problem, when a single curve AND gives an
infinity of curves AMC, it is allowed to collect the solution of this problem, when an
infinity of curves are required[p. 170] on all of which the body arrives at a given point
from A. Indeed some curve AND gives a single curve crossing through a given point of
the curve BSC and in this way innumerable curves of this kind are found. But when the
solution in this manner should be exceedingly difficult and laborious, it is agreed that
another more fundamental method should be produced. But the manner in which we use
this is thus prepared, so that it is necessary to know one curve, from which we show how
to deduce innumerable other curves. Therefore this curve, which must be known, is
elicited from one method of treatment, as from (350), where the curve can be found
crossing through some point of the semicircle in a time to be described.
PROPOSITION 39.
Problem.
358. Let the body be acted on always by a uniform force g downwards and let the curve
AMC (Fig. 45) be given, upon which the body released from A arrives at some given
point C; to find all the curves ANC upon which the body in the same time descends in the
same time to the point C from A.
Solution.
With the vertical line AB taken for the
axis of all the curves, let the abscissa of
the given curve AMC be AP = t, with the
applied line PM = u and let the curve
ANC be one of the sought curves ; in that
the arc AN is taken, [p. 171] which is
completed in the same time as the arc
AM; the points M and N are joined by the
straight line MN and the curve ALB is
constructed such that the applied line PL
is equal to the line MN. Hence this curve
ALB crosses the axis AB at the points A
and B; for with the point M falling on A the point N also falls on A and on putting M at C
the point N is also at C, since the arcs AMC and ANC are put to be transversed in the
same time. Moreover, it is understood from the curve ALB that it is possible to find the
curve ANC; whereby if an infinitude of curves of this kind ALB are considered at A and B
coinciding with AB, a certain one of these gives the curve ANC and in this manner an
innumerable number of curves ANC satisfying the question are produced. Now let PL =
r; then r is some function of AP = t; moreover putting the abscissa of the curve ANC, AQ
= x and QN = y. With these in place we have :EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 255
MN = (( x − t )2 + ( u − y )2 ) = r and thus y = u ± ( r 2 − ( x − t )2 ) .
Again, since the time for AM is put equal to the time for AN, there arises
or
xdt 2 + xdu 2 = tdx 2 + tdy 2 .
But
Let du = pdt and dr = qdt ; where r, p and q are functions of t; again for brevity put
x − t = z or x = t + z ; then the equation arises :
and
Hence this equation is obtained :
from which z and t can be determined ; an equation can be obtained between x and y. [p.
172] Moreover where it is apparent, a function of t of this kind ought to be accepted in
place of r, so that r vanishes on putting t = 0 since t = AB = a, let P be some function of t
vanishing on putting t = 0 and Q is also such a function vanishing on putting t = 0; Now
Q can be changed at A, if on making t = a; it is hence able to put r = P( A − Q ). And with
this value whatever substituted in place of P and Q, the equation for the curve sought is
obtained. Q.E.I.
Scholium 1.
359. Indeed from this equation it can be concluded that it is a little complex to be
resolved, even if it is considered to be fundamental. Moreover often the equation found
must be reductio ad absurdum, if the curve given AMC were the line of shortest descent,
in which case it is not possible to give other curves, upon which the descent can be made
in the same time. Therefore it is seen to be in agreement with our intention that the lines
of quickest descent are to be treated, and this problem resolved, in which between all the
curves either of the same length or having some other common property that is sought the
line which is completed in the minimum time; and also as between all the lines upon
which the descent is made in the same time, that line is to be found, which has some
given property provided. For even if it is most difficult, all the lines having the same timeEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 256
of descent can be shown, yet from these [p. 173] any can be found with the property it
possesses before all the rest. Moreover in order to carry out this program, it is required to
deal with the method of isoperimetrics, that as it is set out everywhere, we will not
explain here.
Scholium 2.
360. Moreover the solution of this problem is obtained in the following manner by(348).
There it was found that :
Let C be the point(Fig. 43), at which it is agreed that all the curves must meet, and put
AE = f and EC = h ; if therefore on putting r = f, then it is also the case that s = h.
According to this, let S be some function of r, which goes over into F on putting r = f,
. This value is substituted into the above equation and that is
with which done, put s = Sh
F
thus integrated, so that on putting u = a , it gives r = f. Then from that equation there is
produced an equation between the coordinates of the curve AMC sought, clearly AP = x
and PM = y, from which, that is
x = ur
and y = us
.
a
a
And the value of the arbitrary S gives an infinity of curves AMC joining the points A and
C an on which the body descending in a given time equal to b arrives at C from A.
Moreover let
dS = Tdr; then q = hT
and [p. 174]
F
or
Which equation can thus be integrated, as on putting u = a makes r = f; with which done
x = ur
and y = hSu
a
Fa
and an equation is obtained between x and y for an infinite number of curves AMC
satisfying the equation.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 257
PROPOSITION 40.
Problem.
361. To find the general rule, following which a curve ought to be disposed, in order that
a body descending on that curve arrives at any point on the curve in the shortest possible
time.
Solution.
Let AMC (Fig. 45) be a curve of this
kind, upon which a body arrives at C from
A in a shorter time than on any other curve
crossing from A to C. Therefore for any two
point M and μ between these, the curve
intercepted must be compared, in order that
its motion along the arc AMC is completed
in a shorter time than any other, if it should
be intercepted. Now the nearby points M
and μ are joined by the two elements
Mm, mμ , and the time to pass through
Mmμ is a minimum, or by the rules of the
method of maxima and minima, equal to the
time for the nearby elements Mn, nμ . [p.
175] The applied lines MP, mp, and μπ are
drawn to the axis AP and with the elements Pp, p π equal to each, or also MG = mH and
pm, if there is a need, is produced to n and mn in made infinitely small with respect to the
elements Mm and nμ . Therefore it must be :
t .Mm + t .mμ = t .Mn + t .nμ .
[The time to traverse the elements Mm and mμ is equal to the time to traverse the
infinitesimally close elements Mn and nμ , the condition for the time variable to be a
stationary point w.r.t. the independent variable x, for which Pp = pπ = dx. Meanwhile
the curve is described at these points M , m , and μ by y , y + dy , and y + dy + ddy ]
Let the speed that the body has at M correspond to the height v, with which therefore both
the elements Mm and Mn are traversed. Moreover the speed that the body has at m,
corresponds to the height v + du and the speed that it has at n, corresponds to the
height v + du + ddw [note that du includes contributions from the vertical force, as well as
from a general horizontal force and some tangential force acting along the curve; the final
speed includes second order contributions from the horizontal and tangential forces, as
we are shown eventually in the corollaries. Recall that in Euler's analysis, an increment
is always added at the start of an element, and holds a constant value within theEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 258
increment : thus, the speed at M corresponds to v throughout Mm, the speed at m
corresponds to v + du, and is held constant throughout mμ , etc]; moreover with that
[former] speed the element mμ is traversed, as now with this [latter] speed so the
element nμ is traversed. Hence therefore this equation is obtained :
now
hence with the centres M and μ and with the arclets mg and nh drawn, there arises :
Again,
From which, with the negligible parts ignored, on substituting there arises
Now on account of the [four] similar triangles nmg, mMG and nmh, μmH , it follow that,
and
On account of which the above equation is given by :
Which equation is homogeneous and determines the nature of the curve AMC, the so-
called brachistochrones, [p. 176] upon which the body in the shortest time arrives at C
from A. Q.E.I.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 259
Corollary 1.
362. Therefore, if the lengths are called :
then
With these substituted, there is obtained :
In which, if from the forces acting v, du, and ddw can be determined, and the equation for
the brachystochrone curve can be obtained. But always ddw thus involves mn, as from the
calculation it exceeds mn.
Corollary 2.
363. Let the radius of osculation of the curve Mmμ = r ; and this lies in the region
directed away from the axis AP, given by :
but
dy
as the differential of ds ;]
[as dx2 + dy2 = ds2, ddx = 0, and dsdds = dyddy, giving dx
r
hence this equation is produced :
Where it is to be noted that 2rv is the centrifugal force, which is sent along the normal to
the curve at M .
Corollary 3.
364. If, from the forces acting, it follows that [we now interpret this equation as the sum
of the works done per unit mass for increments dx with the force P, dy with force Q, and
force R along ds ] :
thenEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 260
since with the point m translated to n the small distance dy is increased by mn and ds by
dy .mn
the small amount ng. [p. 177] Moreover since ng = ds , then
with which substituted this equation is obtained :
Scholium 1.
365. From the solution, it is understood that the formula found extends the widest and can
be extended to any forces acting, and also including resistance. For whatever forces
should be acting, so du as well as ddw can be determined, and which values put in place
gives the equation for the brachystochrone sought. But yet these are only in place, if the
directions of the forces are in the same plane; for the curve found is situated in the same
plane. Yet no less, if the forces should not be acting in the same plane, a brachystochrone
curve can be found in a given plane with the help of this formula. Indeed in any given
particular plane it pleases, a brachystochrone curve is given, whatever the forces acting
should be. Now the other question is, if a brachystochrone curve is sought from among
all the curves joining two given points, also not situated in one given plane. Now as often
as the directions of the forces acting in the same plane are put in place, there is no doubt
that the brachystochrone curve is in the same plane. For if the curves are not in the same
plane, oblique forces are acting and therefore they do not give the body as great an
acceleration as is possible. [p. 178] Therefore from this solution, so the brachystochrone
curve is found completely, if the directions of the forces acting are in the same plane, and
also a brachystochrone is present in a given plane, whatever should be the forces acting.
[However, we understand that the time will be larger for such curves where the forces are
not coplanar.]
Scholium 2.
366. This question about brachystochrone curves or lines of quickest descent was first set
out by the most celebrated Joh. Bernoulli [actually Leibniz and Jas. Bernoulli] and many
solutions of this are extant, as in the Act. Lips., so also in the English Transactions, and in
the Comm. Acad. Paris, and in others, where the solution for this problem, under the
hypothesis of forces acting directed downwards and for centripetal forces, have been
given. But no one has solved the fundamental problem that we have given here, set out so
widely, so that it can also be extended to include forces of any kind, as well as resistance.
For all have supposed that ddw = 0 , because that is always wrong, unless the direction of
the force is MG or mH. And the most celebrated Hermann stumbled over this, while he
used such a proposition in finding the brachystochrones in a resistive medium in theEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 261
Comm. Acad. Petrop. A 1727; and I have corrected that very problem, in the same Comm.
A. 1734.
[Ioh. Bernoulli, Curvatura radii in diaphanis non uniformis solutionque problematis a se
in Actis 1696, p. 269, propositi de invenienda linea brachystochrona, Acta erud. 1697, p.
206; Opera Omnia, Tom. I, p. 187; Lettre de Mr. Jean Bernoulli a Mr. Basnage, sur le
problème de isopérimètres, Histoire des Ouvrages des Sçavans, Paris 1697, p. 452; Opera
Omnia, Tom. I, p. 194; Remarques sur ce qu'on a donné jusqu'ici de solutions des
problèmes isopérimètres, Mém. de l'acad.d. sc. de Paris 1718, p. 100; Opera omnia, Tom.
II, p. 225.
Iac. Hermann, Theoria generalis motuum, qui nascuntur a potentiis quibusvis in corpora
indesinenter agentibus, Comment. acad. sc. Petrop. 2 (1727), 1729, p. 139.
L. Euleri Commentatio (E042) : De linea celerrimi descensus in medio quocunque
resistente. Comment. acad. sc. Petrop. 2 (1734/5), 1740, p. 135. L. Euleri Opera Omnia,
series I, vol. 25. Commentatio (E056) : Curvarum maximi minimive proprietate
gaudentium inventio nova et facilis, Comment. acad. sc. Petrop. 2 (1736), 1741, p. 172.
L. Euleri Opera Omnia, series I, vol. 25. Notes by P.St.]EULER'S MECHANICA VOL. 2.
Chapter 2e.
page 262
Translated and annotated by Ian Bruce.
CAPUT SECUNDUM
DE MOTU PUNCTI SUPER DATA LINEA IN VACUO.
[p. 151]
PROPOSITIO 36.
Problema.
328. Posita potentia sollicitante uniformi g et ubique deorsum directa invenire omnes
curvas AMC (Fig. 41), super quibus corpus ex A dato tempore ad rectam BC ad
horizontalem utcunque inclinationam descendat.
Solutio.
Exprimat curvae AND applicata BD tempus,
quo corpus ex A ad rectam BC pertingit, et
ducta per quodvis punctum M recta MQ
parallela rectae datae BC secante verticalem AB
in Q exprimat applicata QN tempus, quo
corpus partem AM percurrit. Quare si infinitae
curvae AND concipiantur, quae omnes in B
eandem habeant applicatam BD, hae omnes
generabunt curvas AMC, super quibus corpus
dato tempore ab A ad rectam BC pervenit.
Curvae autem AND, ut supra monitum,
concurrere debent in A cum verticali AB et
usque ad D divergere debent ab AB. Ponatur
nunc tangens anguli ABC = k sitque AP = x, PM = y, AQ = u, QN = t et AB = a; erit
y
y
PQ = k ideoque x + k = u .
Quia autem celeritas in M debita est altutudini gx, erit tempus per AM =
quod aequale est debet ipsi QN = t ; erit adeo dt =
( dx 2 + dy 2 )
gx
y
∫
( dx 2 + dy 2 )
gx
,
et gxdt 2 = dx 2 + dy 2 . At
ob curvam AND datam dabitur t in u, et cum sit u = x + k , dabitur t per x et y ;EULER'S MECHANICA VOL. 2.
Chapter 2e.
page 263
Translated and annotated by Ian Bruce.
quamobrem habebitur aequatio inter x et y pro curva quaesita AMC. Vel cum sit
y = ku − kx , erit
gxdt 2du 2 = ( k 2 + 1 )dx 2 − 2k 2dudx + k 2du 2 ,
ex qua aequatione x per u invenire licebit. Sit ad hoc dt = pdu, erit
gxp 2du 2 = ( k 2 + 1 )dx 2 − 2k 2dudx + k 2du 2
atque [p. 152]
dx =
k 2 du ± (( g ( k 2 +1 ) p 2 x − k 2 )du 2 )
.
k 2 +1
Curva igitur AND talis accipi debet, ut ubique p maius sit quam
k
.
gx( k 2 +1 )
Aequatio illa autem ita debet integrari, ut facto u = 0 fiat x = 0. Quo facto quoque eruetur
aequatio inter x et y pro curva quaesita. Q.E.I.
Corollarium 1.
329. Curva AMC tanget in A rectam AB, si fit dy = 0 posito x = 0; tum vero debebit esse
du = dx atque 1 = ( g ( k 2 + 1 ) p 2 x − k 2 ) . Quare hoc eveniet, si fit ppu = 1g facto x = 0.
Quia autem hoc casu est y infinities minor quam x, erit in ipso initio x = u; ex quo
sequitur curvam AMC in A tangere verticalem AB, si fuerit ppx = 1g positu u = 0.
Corollarium 2.
y
ydy
330. Deinde curva AMC normalis erit in QM, si furerit PQ = k = dx seu
2
dx = kdy = k 2du − k 2dx sive dx = k 2 du . Hoc vero eveniet, ubi erit p 2 x =
k +1
kk
.
g ( k 2 +1 )
Corollary 3.
331. In ipso puncto A expressio ppx vel finitum valorem eumque maiorem quam
kk
habebit facto x = 0 vel infinite magnum. In posteriore casu erit dx = ± ∝ du , et
2
g ( k +1 )
dy
cum sit du = dx + k , erit dy = − kdx. [p. 153] Quibus casibus tangens curvae AMC in A
parallela erit rectae BC.
Exemplum.
332. Sit curva AND parabola quaecunque, ita ut sit
t = 2α u ;
g
eritEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
dt = αdu et p = α ,
gu
gu
page 264
unde habebitur ista aequatio
Huius aequationis integralis est
existente
et
[Si est α < 1 , fit B et hinc quoque ρ numerus positivus.] Cum igitur sit π numerus
negativus, erit
ubi C denotat constantem, quae efficiat, ut posito x = 0 fiat u = 0. Manifestum autem est,
quaecunque fuerit constans, semper fieri u = 0 posito ρ vel π evanescit. At π evanescere
non potest, ρ vero evanescit casu, quo α = 1 ; hoc igitur casu debet esse C =∝ fietque
seu u = x et y = 0; quare satisfacit hoc casu recta verticalis AB. Reliquis casibus vero ob
C arbitrariam quantitatem ex unica curva AND innumerabiles curvae AMC inveniuntur.
Unicus porro casu est seorsim tractandus, si A = B seu
tum enim erit
existente
Consequenter pro hoc casu habebitur haec aequatio [p. 154]
ubi C quoque determinatione non opus habet.
Si est α > 1 , fit B et hinc quoque ρ numerus negativus; tum ergo debet esse C =∝ .
Hoc ergo casu erit velEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 265
vel
Quae duae aequationes sunt pro lineis rectis certo modo inclinitis et per A transeuntibus
haeque etiam generaliter satisfaciunt. Ut si fuerit α = 1 , erit A = 1 et B = 0 hincque hae
aequationes
quae est linea recta perpendicularis in BC; haec enim a corpore eodem tempore
percurritur quo verticalis AB.
Corollarium 4.
332a. Nisi igitur sit α > 1 vel α = 1 , innumerabiles lineae curvae inveniuntur problemati
satisfacientes; quae ergo omnes minore tempore absolventur quam perpendicularis AB.
Corollarium 5.
333. Cum ergo ex unica curva AND infinitae oriri queant curvae AMC, facile intelligitur
infinities plures curvas huic quaestioni satisfacere quam praecedenti.
Corollarium 6. [p. 155]
334. Si α < 1 , effici potest determinanda constante C, ut curva quaesita per datum
punctum rectae BC transeat. Deinde aliis assumendis curvis AND simili modo infinitae
curvae poterunt inveniri, super quibus corpus non solum dato tempore ad rectam BC
perveniat, sed ad quodvis in ea punctum datum C.
Scholion 1.
335. In hoc exemplo casus, quo α = 1 , bis occurrit; prima enim vice linea recta verticalis
tantum satisfaciens est inventa, altera vice praeter hanc rectam alia inclinata, utroque
tamen modo eadem aequatione generali sumus usi. Saepius autem iam huiusmodi casus
obtigerunt, in quibus aequationes differentiales continent in se aequationes integrales,
quae nihilhominus per integrationes non eruuntur. Ut in casu α = 1 haec habetur aequatio
differentialis
quae integrata dat x = u. Interim tamen perspicuum est hanc aequationem
k 2u = ( k 2 + 1 )x in illla quoque contineri, etiamsi per integrationem non prodeat. Et hanc
ob rem posterior aequatio integralis aeque satisfacit ac prior x = u. Hinc generaliter
colligere licet aequationem differentialem
dt = Vdu ,
T
in qua T est talis functio ipsius t, quae evanescat posito t = 0, et V functio quaecunque
ipsius u, aeque comprehendere hanc integralem t = 0 ac hanc [p. 156]EULER'S MECHANICA VOL. 2.
Chapter 2e.
page 266
Translated and annotated by Ian Bruce.
dt = Vdu ,
T
∫
∫
quae per integrationem elicitur. Plerumque quidem casus t = 0, si t est simplex quantitas,
negligi potest; at si t est quantitas composit ut in nostro casu, perperam omittitur. Similem
casum supra habuimus (300) in aequatione
ubi observavimus aequationem x = a in ea contineri, etiamsi integratio nequidem possit
perfici. Nam posito a − x = t erit − dx = dt et
erit functio ipsius t, quae fit = 0, si fit t = 0 seu x = a; namque
∫ Pdx ita accipi iubebatur,
ut evanescat posito x = a. Posita ergo hac ipsius t functione = T erit ds = dtT b , ex qua
aequatione ergo tuto concludi licet satisfacere aequationem t = 0 seu x = a ideoque
problemati illi satisfacere circulum, ut ibi innuimus (303). Magis universaliter vero in hac
aequatione Vdu = dt
, si T non evanescit posito t = 0, comprehendetur ista aequatio T = 0,
T
ex qua erit t = constanti quantitati ideoque dt = 0. Unde intelligitur T = 0 contineri in
aequatione proposita Vdu = dt
. Atque hinc, si t fuerit quantitas composita v.g. ex u et x,
T
statim habetur aequatio integralis per integrationem vix eruenda.
Scholion 2.
336. Casus hic superest, qui peculiarem resolutionem requirit, [p. 157] quando recta BC
supra punctum A cum BA concurrit et quando est parallela. Considerabimus autem
sequente problemate tantum casum, quo fit BC parallela verticali AB et in data distantia
posita; ex quo simili modo casum rectae BC utcunque inclinatae deducere licebit.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 267
PROPOSITIO 37.
Problema.
337. Sollicitetur corpus perpetuo deorsum vi uniformi g ; invenire curvas innumerabiles,
super quibus corpus ex A (Fig. 42) motum a quiete incipiendo dato tempore ad rectam
verticalem EC perveniat.
Solutio.
Sit AMC curva quaecunque quaesitarum et pro axe sumatur
recta verticalis AB; dicatur AP = x, PM = AQ = y; erit celeritas
in M debita altitudini gx et tempus per AM =
( dx 2 + dy 2 )
∫
gx
Sit porro AND curva, cuius quaevis applicat QN exprimat
tempus per AM, et sit QN = t functioni ipsius y; poterit ex
curva AND data curva AMC inveniri. Quare si infinitae curvae
AND concipiantur, quae omnes in E communem habeant
applicatam DE, omnes producent curvas AMC, super quibus
corpus dato tempore per DE expresso ex A ad CE perveniet.
Erit itaque
t=
∫
( dx 2 + dy 2 )
gx
et posito dt = pdy erit
gp 2 xdy 2 = dx 2 + dy 2 atque dx = dy ( gp 2 x − 1 )
[p. 158] Quae ita integrata, ut posito x = 0 fiat y = 0, dabit curvas AMC quaesitas.
Sit R functio quaecunque ipsius y et Rdy ita capiatur, ut evanescat posito y = 0. Tum fiat
∫
∫ Rdy = A posito y = AE = a et existente DE = b sumatur
t=
b ∫ Rdy
;
A
erit
Quae aequatio, quicquid pro R substituatur, dabit innumeras curvas quaesito
satisfacientes. Q.E.I.EULER'S MECHANICA VOL. 2.
Chapter 2e.
page 268
Translated and annotated by Ian Bruce.
Corollarium 1.
338. Casus ergo habetur simplicissimus, si fuerit R = 1; tum enim aequatio separabilis
y b
prodit. Erit vero t = a
ob A = a. Hanc ob rem fit
Qui autem nullius est utilitatis ob valorem ipsius y imaginarium.
Corollarium 2.
339. Quia autem
( gbR 2 x − A2 ) non potest esse quantitas imaginaria, oportet sit
2
R2 x > A
; etiamsi x = 0. Quare R neque quantitas constans esse potest neque functio
gb
ipsius y, quae evanescat facto y = 0. Hanc ob rem R talis esse debet functio ipsius y, quae
fiat =∝ , si ponatur y = 0. Praeterea tamen eiusmodi esse debet, ut Rdy non fiat
∫
infinitum, quod evenerit, si esset R = 1y vel 12 etc.
y
Exemplum. [p. 159]
340. Ponamus ergo esse R = 1 ; erit
y
∫ Rdy = 2 y et A = 2 a .
Hinc habebitur ista aequatio
Quae aequatio quia est homogenea, ponatur x = qy; erit
seu
gb
Posito 4a = n et (nq - 1) = r erit
Quae posterior formula a quadratura circuli pendebit, si n < 2.
Altereo vero casu n > 2 erit integrale
Quae ob
abit in hancEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 269
Ubi pro C constantem quamcunque accipere licet, quia ipsa aequatio ita est comparata, ut
posito x = 0 fiat y = 0. Per methodum autem supra traditam (335) ex aequatione
differentilai statim habetur haec integralis
unde oritur
quae dat duas lineas rectas, nisi sit gb < 8a , quo casu aequatio est imaginaria.
In casu, quo n = 2, erit
unde fit
seu
Ubi etiam pro C quantitatem quamcunque accipere licet.
Si n < 2, tum constructio curvae partim a logarithmis, [p. 160] partim a quadratura
circuli pendet; fiunt enim ob ( n 2 − 4 ) imaginarium logarithmi inventi imaginarii. Hoc
igitur casu expedit constructionem perficere prae expressione analytica.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 270
PROPOSITIO 38.
Problema.
341. Sollicitetur corpus perpetuo deorsum vi uniformi g dataque sit curva quaecunque
BSC (Fig. 43) ; invenire omnes curvas AMC, super quibus corpus descendo ex A dato
tempore ad curvam BSC perveniat.
Solutio.
Sit curvarum quaesitarum quaecunque AMC, per cuius quodvis punctum M ducatur
curva MQ similis curvae BSC respectu puncti fixi A, et exprimat curvae AND applicatae
NQ tempus per arcum AM; exponet ergo applicata BD tempus per totam curvam AMC.
Quo facto poterit vicissim ex data curva AND curva AMC inveniri. Quare si infinitae
curvae AND concipiantur, quae omnes in B habeant applicatam BD communem, eae
generabunt infinitas curvas AMC, super quibus omnibus corpus ex A descendendo dato
tempore per BD expresso ad curvam BSC perveniat. Si nunc
AB = a, BD = b et arcui QM abscindatur arcus similis BS ex curva data BSC; erit
AQ : AB = PM : RS = AP : AR = PQ : BR. [p. 161]
Ponatur porro AP = x , PM = y , AQ = u , QN = t , AR = r , RS = s ; dabitur ob curvam BSC
datam aequatio inter r et s atque ob curvam AND datam dabitur aequatio inter t et u. At
ob similitudinem erit u : a = y : s = x : r , unde erit y = us
et x = ur
.
a
a
Celeritas deinde corporis in M debita est altitudini gx, ex qua tempus per AM erit =
∫
( dx 2 + dy 2 )
gx
,
quod aequae poni debet ipsi t; unde oritur ista aequatio gxdt 2 = dx 2 + dy 2 .EULER'S MECHANICA VOL. 2.
Chapter 2e.
page 271
Translated and annotated by Ian Bruce.
Quia autem t per u datur, sit dt = pdu et p sit functio ipsius u; atque ob
dx = udr +a rdu et dy = uds +a sdu
transibit illa aequatio in hanc
garup 2du 2 = ( udr + rdu )2 + ( uds + sdu )2
At quia curva BSC datur, erit s functio ipsius r sitque ds = qdr existente q functione
ipsius r quacunque. His substitutis habebitur aequatio inter u et r ista
garup 2du 2 = ( udr + rdu )2 + ( uqdr + sdu )2
Quae radice quadrata extracta dat
Ex qua si aequatio inter r et u inveniatur, inde habebitur simul aequatio inter x et y pro
curva quaesita.
Quod autem ad curvam AND attinet, sit P functio quaecunque ipsius n et Pdu ita
∫
integratum, ut evanescat facto u = 0 et fiat = A posito u = a; tum sumatur t =
b ∫ Pdu
pro
A
aequatio curvae AND. Erit ergo p = PA b , ubi pro P functionem quamvis ipsius u ponere
licet. Q.E.I.
Corollarium 1. [p. 162]
342. Si u ponatur = 0, eo ipso quoque x et y evanescunt, nisi forte fiat r vel s infinitum.
Illo igitur casu in integratione aequationis differentialis inventae constantem quamcunque
addere licet, quia non opus est, ut r datum habeat valorem, si u fit = 0.
Corollarium 2.
343. Tum igitur ob constantem arbitrariam addendam ex unica curva AND data
innumerabiles inveniuntur curvae AMC quaesito satisfacientes.
Corollarium 3.
344. Si curva BSC ita est comparata, ut nusquam neque r neque s fieri queat infinite
magnum, semper unica curva AND infinitas dabit curvas quaesitas AMC. Quae non solum
hanc habebunt proprietatem, ut corpora super iis descendentia simul ad datam BSC
perveniant, sed quoque simul ad quamvis datae similem curvam QM pertingent.
Corollarium 4.
345. Cum igitur in integratione aequationis inventae constantem quamcunque addere
liceat [p. 163], ea ita poterit assumi, ut curva AMC ad datum punctum C curvae datae
BSC dirigatur. Hocque modo infinitae curvae AMC poterunt inveniri, quae omnes in dato
puncto C conveniant.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 272
Scholion 1.
346. Posuimus curvas QM similes curvae BSC, ut curva ipsa in A erecta fiat infinite parva
et omnia puncta curvae BSC in A conveniant et x et y evanescant posito u = 0.
Potuissemus autem eodem modo curvas QM vel cum BSC congruentes ponere vel
discrepantes lege quacunque. Ut sit Q functio ipsius u quaecunque evanescens posito u =
0 abeatque ea in B facto u = a, curva QM ita pendere poterit a curva BSC, ut sit
Qr
Qs
x = B et y = B ;
namque facto u = a curva QM transibit in ipsam BSC et in A curva in punctum transibit,
nisi curva BSC in infinitum progrediatur. At etiam hoc casu pro Q talis accipi poterit
functio, ut, etiamsi fiat r =∝ , tamen Qr et Qs fiat = 0, si u = 0. Posito autem dQ = Vdu
habebitur aequatio generalis sequens
Quae aequatio latissime patet et ex unica curva AND infinite infinitas curvas AMC
suggeret, quae etiam infinitas suppeditabit, quae per datum punctum C transeunt.
Scholion 2. [p. 164]
347. Quantumvis generalis autem est haec aequatio, tamen curva QM est similis curvae
BSC, quia est x : y = r : s . Quare adhuc generalior solutio poterit exhiberi, in qua curvae
QM utcunque dissimiles ponuntur curvae BSC, eiusmodi tamen, ut QM in BSC abeant
facto u = a. Obtinebitur vero haec solutio, si R sumatur functio quaecunque ipsius u
evanescens facto u = 0 abeatque R in D posito u = a sitque dR = Wdu. Sumatur enim
Qr
x = B et y = Rs
;
D
abibit x in r et y in s, si fiat u = a, atque evanescente u tam x quam y evanescent, quicquid
sit r. Hinc autem sequens orietur aequatio generalissima
loco dr, vel etiam loco r poterit
In hac aequatione loco dr introduci potest ds ponendo ds
q
x introduci ponendo loco r eius valorem Bx
et tum habebitur aequatio inter u et x.
Q
Notandum autem est, quia Q evanescit facto u = 0, P talem esse debere functionem ipsius
u, ut P 2Q posito u = 0 vel fiat quantitas finita vel infinita magna; at tamen cavendum, ne
∫ Pdu debito modo sumtum fiat infinite magnum.EULER'S MECHANICA VOL. 2.
Chapter 2e.
page 273
Translated and annotated by Ian Bruce.
Corollarium 5.
348. Aequatio in solutione inventa fit separabilis, si fuerit P = 1 ; erit
u
A = 2 a et p =
b
. [p. 165] Habebitur enim
2 au
dantur enim s et q per r.
Corollarium 6.
349. Simili modo aequatio scholii 1 separationem admittet, si furerit
P 2Q = V 2 seu P = V .
Q
Habebitur enim
in qua indeterminatae u er r sunt a se invicem separatae.
Exemplum 1.
350. Manente P 2Q = V 2 seu
∫ Pdu = 2 Q ob Vdu = dQ, erit facto n = a A = 2 B.
Unde fit
Habebit ergo
∫ Pdu requisitam proprietatem, ut evanescat facto u = 0; evanescit enim Q.
Sit nunc curva BSC circulus super diametro AB descriptus; erit
s = ( ar − r 2 ) et q =
a − 2r
2 ( ar − r 2 )
atque
1 + qq =
a2
;
4( ar − r 2 )
his valoribus loco s et q substitutis prodibit ista aequatio
[p. 166] Quae aequatio non solum indeterminatas a se invicem habet separatas, sed etiam
generaliter per logarithmos integrari potest; potest enim in aequationeEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 274
membrum irrationale rationale effici. Prodibit autem integralis haec
Notari hic convenit casum, quo gb = 4a seu b = 2 a , quo tempus per quamvis curvam
g
AMC aequale ponitur tempori descensus per rectam verticalem AB; tum enim erit
Si igitur signum + valeat, erit dr = 0 et r = const. = c, unde fit
s = ( ac − c 2 )
et
quae, aequatio omnes dat chordas in hoc semicirculo ex A ductas, quemadmodum iam
demonstrvimus (102) tempora per singulas chordas esse inter se aequalia. Valeat signum
– , erit
atque hinc
Erit ergo
atque ob s = ( ac − c 2 ) habebitur
eliminata ergo r prodibit ista aequatio (posito CB = m )
y 2 + x 2 = ma xy .
Hae ergo curvae hanc habent proprietatem, ut arcus earum a semicirculo abscissi
absolvantur descendendo eodem tempore, eo scilicet tempore, quo singulae semicirculi
chordae percurruntur.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 275
Corollarium 7. [p. 167]
351. Huius autem curvae, cuius aequatio est y 2 + x 2 = ma xy ,
Figura est AMFA (Fig. 44); habet nimirum diametrum AF cum
verticali AP angulum semirectum constituentem et in A nodum. At
vero omnes hae curvae sunt inter se similes et omnes ad omnes
circulos accomodari possunt.
Corollarium 8.
352. Si ergo in hac curva sumatur quodcunque punctum M et per hoc et A circulus
transiens concipiatur centrum habens in verticali AP, corpus arcum AM eodem tempore
percurret, quo diametrum circuli seu quo chordam AM. Quare haec curva hanc habet
proprietatem, ut quivis arcus AM a corpore ex A descendente absolvatur eadem tempore,
quo subtensa AM.
Corollarium 9.
353. Hoc ergo casu, quo P 2Q = V 2 (349), perinde est, sive sit Q = u sive secus; eadem
enim prodit aequatio inter x et y, uti tam ex exemplo hoc quam ex aequatione intelligitur.
Exemplum 2.
2
2
354. Manente P Q = V , ut sit [p. 168]
sit curva BSC circulus centro A radio AB = a descriptus; erit s = ( a 2 − r 2 )
et
Quibus substitutis prodibit sequens aequatio
ubi gb maius esse debet quam 4a, quia r non excedere potest a. Hinc statim ille radius
innotescet, qui quaesito satisfacit, ponendo
quo casu eritEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 276
Unde erit
quae est tangens anguli illius radii, super quo corpus dato tempore b ad peripheriam
pervenit, cum verticali AB. Curvae praeterea algebraicae non dantur, quia formula
differentialis non effici potest rationalis.
Exemplum 3.
355. Sumta aequatione generalissima ex (347) ponatur linea BSC recta horizontalis; fiet r
, ubi q erit infinite magnum.
= a et dr = 0. Hanc ob rem loco dr introducatur eius valor ds
q
Deletis ergo terminis, qui prae q evanescunt, proveniet ista aequatio
Quae aequatio ob Wdu = dR , et P, Q et V data per u integrationem admittit. [p. 169] Erit
nempe
Ex qua aequatione ergo invenitur s. Deinde, cum sit y = Rs
, at y evanescere debeat facto
D
u = 0, debebit esse C = 0, si quidem integrale
ita sumatur, ut evanescat posito u = 0. Tum ergo erit
Quae est aequatio generalis pro omnibus curvis, super quibus corpus ex A ad
horizontalem datam descendit.
Exemplum 4.
356. Teneatur aequatio generalissima supra inventa (347) et ponatur linea BSC recta
verticalis parallela ipsi AB et ad distantiam f ab ea posita; erit s = f et q = 0. Quare
habebitur ista aequatio
Cum autem sit Qr = Bx, hoc substituto prodibitEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 277
fR
unde invento x erit y = D . At quia in illa aequatione indeterminatae x et u non sunt a se
invicem separatae, non multum ex ea derivare licet.
Scholion 3.
357. Ex generali huius problematis solutione, quando unica curva AND infinitas dat
curvas AMC, colligere licet solutionem huius problematis, quo infinitae requiruntur
curvae, [p. 170] super quibus omnibus corpus ex A ad datum punctum pervenit. Quaelibet
enim curva AND unam dabit curvam per datum punctum curvae BSC transeuntem hocque
modo innumerabiles huiusmodi curvae obtinebuntur. Sed cum hoc modo solutio nimis
esset difficilis et operosa, aliam genuinam magis afferre convenit. Modus autem, quo
utemur, ita est comparatus, ut unam curvam iam nosse oporteat, ex qua innumerabiles
deducere docebimus. Haec ergo curva, quae nota esse debet, ex alterutra traditarum
methodo eliciatur, ut ex (350), ubi curva per quodvis punctum semicirculi transiens
inveniri potest dato tempore describenda.
PROPOSITIO 39.
Problema.
358. Sollicitetur corpus perpetuo deorsum vi uniformi g dataque sit curva AMC (Fig.
45); super qua corpus ex A ad punctum datum C pervenit; invenire omnes curvas AnC,
super quibus corpus eodem tempore ad punctum C ex A descendit.
Solutio.
Sumta verticali AB pro axe omnium
curvarum sit curvae datae AMC abscissa
AP = t, applicata PM = u sitque curva
ANC una quaesitarum; capiatur in ea
arcus AN, [p. 171] qui eodem tempore
absolvatur quo arcus AM; iungantur
puncta M et N recta MN et construatur
curva ALB talis, ut applicata PL aequalis
sit rectae MN. Haec ergo curva ALB
occurret axi AB in punctis A et B; nam
incidente puncto M in A punctum N
quoque in A incidet et posito M in C
punctum N quoque erit in C, quia arcus AMC et ANC eodem tempore percurri ponuntur.
Intelligitur autem ex curva ALB inveniri posse curvam ANC; quare si infinitae huiusmodi
curvae ALB concipiantur in A et B incidentes in AB, earum quaeque dabit curvam ANC
hocque modo innumerabiles prodibunt curvae ANC quaesito satisfacientes. Sit nunc PL =EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 278
r; erit r functio quaedam ipsius AP = t; curvae autem ANC ponatur abscissa AQ = x et
QN = y. His positis erit
MN = (( x − t )2 + ( u − y )2 ) = r ideoque y = u ± ( r 2 − ( x − t )2 ) .
Porro, quia tempus per AM aequale ponitur tempori per AN, erit
seu
xdt 2 + xdu 2 = tdx 2 + tdy 2 .
Est autem
Sit du = pdt et dr = qdt ; erunt r, p et q functiones ipsius t; ponatur porro brevitatis gratia
x − t = z seu x = t + z ; erit
et
Hinc obtinetur ista aequatio
ex qua z et t determinetur; habebitur aequatio inter x et y. [p. 172] Quo autem appareat,
cuiusmodi functio ipsius t loco r debeat accipi, ut r evanescat tam posito t = 0 quam t =
AB = a, sit P functio quaecunque ipsius t evanescens posito t = 0 et Q sit etiam talis
functio evanescens posito t = 0; abeat vero Q in A, si fiat t = a; poterit ergo poni
r = P( A − Q ). Hocque valore substituto quicquid loco P et Q substituatur, habebitur
aequatio pro curvis quaesitis. Q.E.I.
Scholion 1.
359. Ex hac quidem aequatione maxime intricata parum concludi potest ad propositum,
etiamsi haec methodus genuina esse videatur. Saepe autem aequatio inventa ad absurdum
deducere debet, ut si curva data AMC fuerit linea brevissimi descensus, quo casu non dari
potest alia curva, super qua descensus fiat eodem tempore. Ad nostrum ergo institutum
conveniens videtur de lineis celerrimi descensus tractare eaque problemata resolvere, in
quibus inter omnes curvas vel eiusdem longitudinis vel aliam proprietatem communem
habentes ea quaeritur, quae minimo tempore absolvatur, atque etiam quemadmodum inter
omnes lineas, super quibus descensus fit eodem tempore, ea sit invenienda, quae data
quapiam proprietate sit praedita. Etiamsi enim difficillimum sit omnes lineas idem [p.
173] descensus tempus habentes exhibere, tamen ex iis quaelibet potest inveniri exEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 279
proprietate, quam prae reliquis omnibus possidet. Requiritur autem ad hanc rem
pertractatandam methodus isoperimetricorum, quam ut passim expositam hic non
explicabimus.
Scholion 2.
360. Huius autem problematis solutio per (348) sequenti modo habetur. Erat ibi
Sit punctum C (Fig. 43), ad quod omnes curvae convenire debent, ponaturque AE = f et
EC = h ; si ergo fit r = f, fieri debet s = h. Ad hoc sit S functio quaecunque ipsius r, quae
abeat in F posito r = f, quo facto ponatur s = Sh
. Substituatur hic valor in superiore
F
aequatione eaque ita integretur, ut posito u = a fiat r = f. Deinde ex ea aequatione
prodibit aequatio inter coordinas curvae quaesitae AMC, nempe AP = x et PM = y, ex
quo, quod est
x = ur
et y = us
.
a
a
Atque arbitrarius valor ipsius S dabit infinitas curvas AMC puncta A et C iungentes et
super quibus corpus descendens tempore dato = b perveniet ex A ad C. Sit autem
atque [p. 174]
dS = Tdr; erit q = hT
F
seu
Quae aequatio ita integretur, ut posito u = a fiat r = f; quo facto ponatur
x = ur
et y = hSu
a
Fa
atque habebitur aequatio inter x et y pro infinitis curvis AMC quaesito satisfacientibus.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 280
PROPOSITIO 40.
Problema.
361. Invenire legem generalem, secundum quam curva disposita esse debet, ut corpus
super ea descendens citissime perveniat ad quodvis curvae punctum.
Solutio.
Sit AMC (Fig. 45) curva huiusmodi, super qua corpus ex A ad C tempore breviore
perveniat quam supe quavis alia curva per puncta A et C transeunte. Sumtis ergo in ea
duobus quibusque punctis M et μ curva inter ea intercepta ita debet esse comparata, ut
corpus in motu suo per AMC arcum breviore tempore absolvat quam quemvis alium, si
esset interceptus. Sint nunc puncta M et μ proxima iuncta duobus elementis Mm, mμ , et
debebit tempus per Mmμ esse minimum seu per regulas methodi maximorum et
minimorum aequale tempori per elementa proxima Mn, n μ . [p. 175]Ducantur ad axem
AP applicatae MP, mp, μπ sumtisque elementis Pp, p π inter se aequalibus seu quoque
MG = mH et pm, si opus est, ad n producta erit mn infinite parvum respectu elementorum
Mm et m μ . Debebit ergo esse
t .Mm + t .mμ = t .Mn + t .nμ .
Sit celeritas, quam corpus in M habet, debita altitudini v, qua ergo tam elementum Mm
quam Mn percurret. Celeritas autem, quam in m habebit, debita sit altitudini v + du et
celeritas, quam in n habebit, debita sit altitudini v + du + ddw ; illa autem celeritate
percurret elementum m μ , hac vero elementum n μ . Hinc ergo habebitur ista aequatio
est vero
unde ductis centris M et μ arculis mg et nh erit
Porro estEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 281
Quibus, neglectis negligendis, substitutis oritur
Est vero propter triangula simila nmg, mMG et nmh, μ mH, ut sequitur,
et
Quamobrem erit
Quae aequatio est homogenae et determinat naturam curvae AMC brachystochronae
vocatae, [p. 176] super qua corpus tempore brevissimo ex A ad C pervenit. Q.E.I.
Corollarium 1.
362. Si ergo dicatur
erit
His substitutis habebitur
In qua si ex potentiis sollicitantibus determinatur v, du et ddw, habebitur aequatio pro
curva brachystochrona. At semper ddw ita involvet mn, ut mn ex calculo excedat.
Corollarium 2.
363. Sit radius osculi curvae Mmμ = r ; isque in plagam aversam ab axe AP directus erit
at est
hinc prodibit ista aequatioEULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 282
Ubi notandum est esse 2rv vim centrifugam, qua curva in M secundum normalem ad
curvam premitur.
Corollarium 3.
364. Si ex potantiis sollicitanibus fluat
erit
quia puncto m in n translato crescit dy particula mn et ds particula ng. [p. 177] Quia
dy .mn
autem est ng = ds , erit
quibus substitutis habebitur ista aequatio
Scholion 1.
365. Ex solutione intelligitur formulam inventam latissime patere atque ad potentias
sollicitantes quascunque extendi, etiam resistentia non excepta. Quaecunque enim fuerint
potentiae sollicitantes, determinari potest tam du quam ddw, qui valores substituti dabunt
aequationem pro brachystochrona quaesita. Attamen haec tantum locum habent, si
potentiarum directiones sint in eodem plano; curva enim inventa est in eodem plano sita.
Nihilo tamen minus, si potentiae non fuerint in eodem plano, curva brachystochrona in
dato plano ope formulae huius poterit inveniri. In quolibet enim plano dato peculiaris erit
curva brachystochrona, quaecunque fuerint potentiae sollicitantes. Alia vero quaestio est,
si quaeritur linea brachystochrona inter omnes omnino lineas data duo puncta iungentes,
etiam non in uno plano sitas. Quoties vero potentiarum sollicitatium directiones in eodem
plano sunt positae, dubium non est lineam brachystochronam in eodem positam esse
plano. Nam si curvae non essent in eodem plano, potentiae oblique agerent et propterea
corpus non tantum, quantum fieri potest, accelerarent. [p. 178] Ex hac igitur solutione
tam linea absolute brachystochrona, si potentiarum sollicitantium directiones sunt in
eodem plano, invenitur quam linea, quae in dato plano est brachystochrona, quaecunque
fuerint potentiae sollicitantes.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 283
Scholion 2.
366. Questionem hanc de linea brachystochrona seu celerrimi descensus primus produxit
Cel. Ioh. Bernoulli atque plures eius solutiones extant tam in Act. Lips. quam
Transactionibus Angl. et Comm. Acad. Paris. et alibi, ubi hoc problema tam in hypothesi
potentiae sollicitantis deorsum directae quam pro viribus centripetis solution dederunt.
Nemo autem problema fundamentale, quae hic dedimus, tam late patens praemisit, ut ad
potentias quascunque et resistantiam etiam extendi posset. Sumserunt enim omnes
ddw = 0 , quod semper perperam fit, nisi directio potentiae sit MG vel mH. Et hanc ob
rem Cel. Hermannus cespitavit, dum tali propositione ad brachystochronas in medio
resistente inveniandas est usus in Comm. Acad. Petrop. A 1727; quasque correctas dedi
in iisdem Comm. A. 1734 ex hoc ipso problemate.
[Ioh. Bernoulli, Curvatura radii in diaphanis non uniformis solutionque problematis a se
in Actis 1696, p. 269, propositi de invenienda linea brachystochrona, Acta erud. 1697, p.
206; Opera Omnia, Tom. I, p. 187; Lettre de Mr. Jean Bernoulli a Mr. Basnage, sur le
problème de isopérimètres, Histoire des Ouvrages des Sçavans, Paris 1697, p. 452; Opera
Omnia, Tom. I, p. 194; Remarques sur ce qu'on a donné jusqu'ici de solutions des
problèmes isopérimètres, Mém. de l'acad.d. sc. de Paris 1718, p. 100; Opera omnia, Tom.
II, p. 225.
Iac. Hermann, Theoria generalis motuum, qui nascuntur a potentiis quibusvis in corpora
indesinenter agentibus, Comment. acad. sc. Petrop. 2 (1727), 1729, p. 139.
L. Euleri Commentatio (E042) : De linea celerrimi descensus in medio quocunque
resistente. Comment. acad. sc. Petrop. 2 (1734/5), 1740, p. 135. L. Euleri Opera Omnia,
series I, vol. 25. Commentatio (E056) : Curvarum maximi minimive proprietate
gaudentium inventio nova et facilis, Comment. acad. sc. Petrop. 2 (1736), 1741, p. 172.
L. Euleri Opera Omnia, series I, vol. 25.
Relati per P.St.]