---
heading: Chapter 3a
title: "THE MOTION OF A POINT ON A GIVEN LINE IN A MEDIUM WITH RESISTANCE"
date: 2025-03-20
weight: 4
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
c: "darkgoldenrod"
---



PROPOSITION 53. Problem.

465. If a body is acted on by a given force g in a medium with whatever resistance, to
determine the motion of the body descending on a given curve AM (Fig.57), and the
compressive force sustained by the curve at particular points.

Solution.

The abscissa AP = x is placed along the vertical
AP , the applied line PM = y and the arc AM = s; let
the height corresponding to the speed of the body at
M be equal to v, and the resistance at M is equal to R.
Therefore it is evident from the previous chapter,
(93), that if there is no resistance, then [the
differential of the height becomes]
dv = gdx.

The resistance has lessened this increment of the
speed and is equivalent to a tangential force R; and
the effect of this force alone consists of this, that [the
increment] becomes
dv = − Rds.
On account of which, if both the force g and the resistance are both likewise acting on
the body, then this equation becomes
dv = gdx − Rds ,
and from which equation the speed of the body at any point M is to be elicited. [p. 234]
[We have remarked on Euler's basic equations occasionally, which resemble but are
not identical with certain modern equations describing the same phenomena. We note
that no mention is made of mass, so presumably we are to assume that unit mass is used
throughout, or that the forces or accelerations are organised so that the masses always
cancel. In addition, one cannot perform a dimensional analysis on these equations,
without accepting that certain physical quantities have been set equal to 1. Thus, terms
such as gdx and – Rds may be viewed in the modern context as the increments of work done on the body by gravity and against the body by friction, thus increasing or decreasing the kinetic energy of the body; however, the concepts of work and energy were in their infancy in Euler's day, although Johan Bernoulli and others had written
some papers on what was then termed the vis viva.

Euler did not enter into this matter, and adhered to experimental facts when setting
down his equations. Thus we should not view these equations from the modern
physicist's conventional viewpoint, but rather from the mathematician's viewpoint. The
idea that a moving body had something in common with the same body at rest at a greater
height could perhaps best be explained at the time by referring to Galileo's experiments
concerning bodies descending from rest down an inclined plane : from these
observations a height v could be made proportional to the square of the speed at the end
of the descent. This gave Euler the idea of replacing squares of speeds with heights : he
had no hesitation in ascribing such a function v equal to the height above the earth, for
which v was related to the speed of the body. In the first equation above, the force g is
the force of gravity somewhere, while on the earth's surface it has the value g = 1. Thus,
1.dv = gdx is simply a proportionality between two forces or accelerations per unit mass,
while dv = dx for vertical motion near the surface or the earth. Such a proportionality is
seen to be true under the circumstances that if V is the speed at the respective heights x
and v in the locations where uniform gravity is g and 1, then
V 2 = 2 gx = 2.1.v gives VΔV = gΔx = 1.Δv , here assumed at rest initially. In addition, we
have seen that even horizontal speeds are ascribed by such heights, which is thus little
more than a mathematical convenience.


If we view such equations as energy equations,
then a factor of 2 or 12 is missing; hence these are not energy equations, for instead they
are equations used to relate accelerations, and to transform squares of speeds into
corresponding heights under the earth's gravity, and which has the great advantage of
removing all speed and hence time dependence from the equations, which are thus
rendered homogeneous for integration, etc. When the need arises, as in centripetal force
below, the factor of 2 is inserted to deal with the absolute acceleration. In other places,
where actual numbers are required, Euler referred to Huygens pendulum experiments to
get the correct length of the pendulum for a swing of one second.

{Recall that Huygens proposed the idea of measuring lengths in terms of seconds via his
pendulum, were the second was an arbitrary constant time interval}. In a word then, view
Euler's dynamical equations above and elsewhere as mathematically expedient
transformations for solving dynamical problems, but realise that these transformations are
not motivated by potential/kinetic energy conservation, although these can now be
viewed as analogous to Euler's pioneering work. We return to the text : ]
And if the body descends from rest at A, the integration is thus to be put in place so
that on placing x = 0 the height v = 0 also. Now if the body starts the descent at A with a
given speed, on putting x = 0 in the integration, v must be made equal to the height of that
initial speed. Moreover since the speed of the body is found, likewise the time is
obtained, in which any arc AM you please is completed, by taking ds . As for the force
∫ v
sustained by the curve at M, it is observed that the curve at M is pressed on by two forces,
clearly the centrifugal force and the normal force. We put the curve to be convexEULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 372
downwards and the element dx constant; the length of the radius of osculation directed
along the opposite normal MN is equal to
ds 3 ,
dxddy
and thus the centrifugal force is equal to
2vdxddy
,
ds 3
which is pressing on the curve along the direction MN . Now the curve is pressed upon by
a normal force along the same direction which is given by
gdy
;
ds
for the normal force arises only from the absolute force acting g, since the direction of the
force of resistance is placed along the tangent and thus does not generate a normal force.
Consequently the total force, which presses on the curve at M along the direction of the
normal MN , is equal to
gdy 2vdxddy
+
.
ds
ds 3
Q.E.I.


Corollary 1.


466. Therefore the expression of the force pressing the curve agrees with that which we
found in the case of the vacuum (83). Yet the curve is pressed in a medium with
resistance by the same force as in a vacuum on account of the speed, upon which the
centrifugal force depends, which is not varies by the resistance of the medium.


Corollary 2.

467. In this descent the body does not have the maximum speed as in a vacuum in which
the tangent is horizontal at the point B, but at the place where dv = 0 at which it has the
maximum speed, is found from this equation :
in that point, where the sine of the angle, that the tangent to the curve makes with the line
to the horizontal, is to the whole sine as the absolute force g to the resistance R at that
place.

Corollary 3.

468. Therefore the speed of the body is increased as far as this point, in which the speed
is a maximum; now beyond this point the speed decreases again since then Rds exceeds
gdx and on this account makes dv negative.

Corollary 4

469. If the resistance is as some power of the speed of which the exponent is 2m, and if
the resisting medium is uniform, the exponent of this is k, where k is the height
corresponding to the speed with which the body is moving, the resistance is allowed be
made equal to the force of gravity; in this case



m
R = vm
k
page 373
and this equation is obtained defining the motion [note : the speed corresponds to the
square root of the height always, hence vm is proportional to the speed] : p. 236]
m
dv = gdx − v mds .
k
Corollary 5.
470. But if abscissae in taken on the axis BQ and we put BQ =
x, QM = y and BM = s, on account of these a differential
quantity negative with respect to the former is obtained :
dv = − gdx + Rds .
Which equation is thus to be integrated, so that on putting x = 0
makes v = b, if indeed the body has acquired a certain speed at
B to which the height b corresponds. But the force pressing
gdy
along MN, that the curve sustains, is equal to ds −
2vdxddy
.
ds 3
Corollary 6.
471. If the medium is uniform, and the exponent of this is k, the resistance is now
proportional to some function of v, which is V, and such a function K of k is taken, as V
is of v; the resistance is given by R = VK and thus this equation is obtained :
dv = − gdx + Vds
K
with the axis BQ taken.
Scholium 1.
472. I have given this formula twice for the increment of the speed for the two axes AP
and BQ, since that is soon to be used in what follows. [p. 237] Clearly when the descent
is made from the fixed point A, we use the first formula by taking AP for the axis. But if
on the same curve several descents as far as the fixed point B are to be considered, as
usually comes about in oscillatory motion, we use the second formula, in which BQ is
had for the axis.

Scholium 2.

473. Since the formula, from which the motion of the body on the given line must be
determined, has thus been prepared, in order that a few indeterminate cases can be
separated from each other, often nothing can be concluded from that about the motion
considered. On account of which it is agreed to pursue only these cases, for which the
equation
dv = ± gdx m Vds
K
can be either separated or integrated. Moreover all these cases can be reduced to three
general cases. The first is, when the line on which the body is moving is straight ; for then
on account of ds = ndx the equation is changed into this :EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
± Kdv = dx ,
gK − nV
page 374
in which the indeterminates are separated from each other. The second case is, when V is
present as a first power of v; for then the equation admits to integration. The third case is
when v has thus been prepared in the equation, that in the equation v and x everywhere
constitute a number of the same power ; for then by the rule noted by Bernoulli the
indeterminates can be separated from each other. [Concerning the integration of
differential equations, where an example of a method of integration is presented without
the previous separation of the indeterminates. Comment. acad. sc. Petrop. 1 (1726),
1728, p. 168; Opera Omnia Tom. 3, Lausannae et Geverae 1742, p. 108.] Moreover this
comes about, if Vds is a single power of v and x. Besides these there are two other cases
that permit integration, but these are not relevant here. [p. 238] The first is, if the
resistance vanishes, which case has indeed been set out sufficiently in the previous
chapter. The other case is, if the force g vanishes; concerning which there is no need that
we treat this, since the motion on any given line agrees with the motion on a straight line,
about which enough has been said in the previous book. Besides also the equation can be
separated in many more cases if it is the case that V = v 2 , clearly whenever the equation
for the curve has thus been prepared, so that the equation can be reduced to the case that
formerly Com. Riccati proposed. Now generally it is also possible to show the speed by a
series in this case and for a finite expression to be defined, as I have given a general
solution of the Riccati equation. [E31 in this series of translations] Therefore as the
solution of a problem may be required, in addition to these three cases set out,
immediately afterwards we explain this case also, in which the resistance is proportional
to the fourth power of the speed.

Scholium 3.

474. Since this tract on the motion in a resisting medium is by all accounts difficult and
complex, we will not apply ourselves to many hypotheses of the forces acting, as we did
in the previous chapter, but the force acting shall be uniform and directed downwards and
we do not elicit many centripetal forces to be acting. And when the force acting is put
uniform, [p. 239] the resistance of the medium also can be put to agree with that ; for a
fluid, that generates resistance, diminishes the force of gravity itself, and if that was not
uniform, the absolute force cannot be put to be uniform in a straight line. Then also for
that reason we can assume that the curve in which the body is moving lies in the same
plane, by which we are able to remove many useless difficulties.EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 375
PROPOSITION 54.
Problem.
475. If the body is always acted on by a uniform force g downwards in a medium with
some resistance, to determine the motion of the ascending body on the given curve AM
(Fig.58) and the force pressing on the curve sustained at individual points M.
Solution.
In the vertical AP place the abscissa AP = x, PM = y and AM = s, and let the height
corresponding to the speed of the body at A be equal
to b and at M the corresponding height is v, and the
resistance at M is equal to R. Therefore it is the case,
while the body rises, so the force acting g as well as
the resistance R to be contrary to the motion. On this
account likewise as in the previous proposition,
dv = − gdx − Rds.
From which equation v is thus to be determined, so
that on putting x = 0 makes v = b. Then with the
resistance not present in the pressing force
experienced by the curve, as above the total pressing
force [which we would call the normal reaction now], that the curve sustains at M along
the direction of the normal MN, [p. 240],
gdy
= ds −
2vdxddy
ds 3
gdy
with dx put constant; where ds the normal force and −
both placed along the direction MN. Q.E.I.
2vdxddy
the centrifugal force,
ds 3
Corollary 1.
476. Hence in the ascent of the body on any curve, the speed of the body is continually
made less and the point D is reached, at which the speed of the ascent of the body
vanishes, if in the equation :
dv = − gdx − Rds
after integration, putting v = 0.
Corollary 2.
477. If the body descending on the curve DMA should have this [hypothetical] equation
dv = − gdx + Rds (470),
from which it is understood that the ascent is not similar to the descent, as in a vacuum.
But if [also] the resistance were to become negative or accelerating, then the ascent
would be similar to the descent. Whereby the descent in the medium with resistance
agrees just as much in the resisting medium with the ascent, and in turn with the
acceleration.EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 376
Corollary 3.
478. Since the equation for this ascent yet differs from the equation for the descent, since
the value of the resistance R is put negative, it is understood from the same cases, [p.
241] in which the equation for the descent are to be separated or integrable, from which
the equation for the ascent too can be treated in the same way.
Corollary 4.
479. If we set R = VK , then this equation is found for the ascent on the curve AM :
dv = − gdx − Vds
.
K
But for the descent there is had : dv = − gdx + Vds
.
K
Whereby if the other equation is to be integrated, likewise also the integral of this
equation is had only on putting –K in place of K. [On rising, both dx and ds are
considered as positive, and thus the height corresponding to the speed diminishes;
however, on descending, dx is negative and thus –dx gives a positive contribution to the
height and speed; however, energy dissipation means that the resistance term is negative.
Thus, Euler's musings are here more connected with solving an equation than correctly
handling the physical situation.]
Scholium.
480. Therefore following the three cases mentioned above, in which the equation found
can be either separated or integrated, so that we can handle the descent as well as the
ascent, clearly if the curve is given upon which the motion can be performed. Moreover
then, from the given force acting, we can investigate the curve for resistance and the
force acting on it. Thirdly if the motion should have a certain proposed property, we
determine the curve which it satisfies according to the hypothesis of resistance it satisfies.
Besides other problems follow, in which of these four quantities – resistance, motion,
force pressing, and the curve – two are given, and the remaining two are required. Then
we also have indeterminate problems, for which all the curves are required, upon which
the descending body either acquires the same speed or completes these in the same time.
[p. 242] Then the doctrine of brachistochrone lines follows, and finally the chapter ends
with a treatment of oscillatory motion.EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 377
PROPOSITION 55.
Problem.
481. In a medium with some kind of uniform resistance and under the hypothesis of
uniform gravity g acting, to determine the motion of the body descending on the given
straight line AMB (Fig.59) inclined in some manner to the horizontal.
Solution.
With AP = x then AM = s = nx; PM = y and since the
resistance of the medium is uniform, then let the resistance be
R = VK . Therefore with the height corresponding to the speed at
M equal to v, then
dv = − gdx − nVdx
(465).
K
Hence this equation becomes :
Kdv = dx ,
gK − nV
in which equation the indeterminates are separable from each
other in turn; hence the equation is :
x = gKKdv
,
− nV
∫
in which the integration is effected so that putting x = 0 makes v
= 0, if indeed with the descent starts from A at rest. But if now it has an initial speed, this
has to be introduced through the integration. The time to traverse the interval AM is
equal to
ndx .
∫ v
Therefore with the value in terms of v put in place of dx , the time to traverse
AM is equal to
nKdv
,
∫ ( gK −nV ) v
which integral is thus to be taken, so that it vanishes on putting v equal to the initial
speed at A . Now the pressing force, that the line sustains at any point M is constant,
surely equal to the normal force :
g ( n 2 −1)
gdy
=
,
ds
n
since the centrifugal force vanishes on account of ddy = 0. Q.E.I. [p. 243]
Corollary 1.
482. Hence the speed of the body for some time is accelerating, as during that time
gK > nV. But if once gK = nV, then the body is neither accelerated nor retarded. Now the
speed of the body is diminished if at the start at A it should be the case that nV > gK.EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 378
Corollary 2.
483. Therefore if the body starts to descend from A at rest, then the motion is always
increasing thus yet as gK > nV always, clearly the final speed is that acquired at last from
an infinite descent distance
Corollary 3.
484. Since the greater the angle BAC, the less is the terminal speed that the body is able
to acquire. Now the maximum terminal speed by which the body can progress uniformly
is acquired by descending along a vertical straight line AC.
Corollary 4.
485. If the resistance were as the 2m power of the index of the speed, then
V = v m and K = k m , hence this equation is obtained : [p. 244]
x=
and the time to pass along AM =
∫
k m dv
gk m − nv m
∫ ( gk Nk−nvdv) v .
m
m
m
Example 1.
486. The medium resists in the simple ratio of the speeds ; hence 2m = 1 and
dv = gdx − ndx v .
k
Hence this gives :
or by the series :
if indeed the descent starts from A at rest. Moreover the time to complete the interval AM
is equal to :
Whereby if the time for AM is put equal to t, then this gives :
and in the series expansion:
Hence if the body in the descent along AB acquires the speed corresponding to the height
b, from this there is found the height :EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 379
Example 2.
486. The medium resists in the square ratio of the speeds; hence m = 1 and
∫
gk
x = gkkdv
= kl
,
− nv n gk − nv
if indeed the body starts its descent from A at rest. Whereby if e is the number of which
the logarithm is one, then [p. 245]
On this account, if the body has a speed at B corresponding to the height b, then
gk
AC = kn l gk − nb .
And if the body descends through an infinite distance, it has a speed corresponding to the
gk
height n . Now the time to traverse the distance AM is equal to :
So the distance x as the time can conveniently be expressed by a series, that we show
generally for any value of the letter m in the following example.
Example 3.
488. Let the resistance be expressed by the 2m th power of the speed; then
dx =
k m dv ;
gk m − nv m
[recall that always Euler takes the speed as proportional to the square root of a height v.]
which gives on conversion to a series :
From which there is found :
But if the time to traverse AM = t, which is
dt = ndx ,
v
then we have :
[p. 246]EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 380
PROPOSITION 56.
Problem.
489. A medium resists in some multiple ratio of the speeds, and the point A is given
(Fig.60), from which an infinite number of straight lines AM can be drawn; to determine
the curve CMD of this kind, so that a body descending along any line AM has the same
speed at M.
Solution.
Let 2m be the exponent of the power of the speed, to which
the resistance is proportional, and calling AP = x and AM = z
and putting z = nx. Let the height corresponding to the speed
at M be equal to v, which must be constant, namely equal to b.
Hence we have:
dx =
k m dv
gk m − nv m
(485) with k detonating as above the exponent of the resistance
and g the force acting downwards. Hence in finding the nature
of the curve CM it is necessary to integrate the equation:
dx =
k m dv
gk m − nv m
thus so that on putting v = 0 also makes x = 0,
moreover then b is to be put in place of v and xz in place of n,
and in this way we obtain the equation between x and z expressing the nature of he
curve. Moreover we have integrated the above equation proposed by a series (488), thus
on putting b in place of v we have :
Put q m in place of n and it is multiplied everywhere by q; with which accomplished we
have :
The differential is taken and it is divided by bdg; there is obtained : [p. 247]
orEULER'S MECHANICA VOL. 2.
Chapter 3a.
page 381
Translated and annotated by Ian Bruce.
1
m
But since q m = n and n = xz , put z 1 in place of q and there is produced :
xm
1
m −1
Which multiplied by x m z m goes to this :
Moreover the construction of the curve easily follows from the equation :
Moreover above we had the series equal to qx, from which it is apparent, if we put
qm =
gk m
gx
is to be equal to the harmonic series [p. 248]
m , then
b
b
and thus x is to be infinite. If therefore x is infinite, then q m = z =
x
gk m
, from which it is
bm
evident that the straight line AE is an asymptote to the curve, and the cosine of the angle
m
CAE to be b m . But the distance of the vertex of the curve C is at a distance AC from the
gk
point A, and is equal to this series :
Moreover by necessity, it must be that b m < gk m ; for otherwise the vertex C stands at an
infinite distance from the point A. Q.E.I.
Corollary 1.
490. If the applied line PM is called y, then
with which values substituted in the equation, we have :EULER'S MECHANICA VOL. 2.
Chapter 3a.
page 382
Translated and annotated by Ian Bruce.
Corollary 2.
491. y = px is placed in this equation; and the equation is changed into this :
1− 2 m
which equation multiplied by (1 + pp) 2 m is integrable; for it gives : [p. 249]
which expression can be effected by quadrature.
Corollary 3.
492. If the resistance vanishes and the body is moving in a vacuum, then k becomes
bq
infinite; and from the series given above there is found : qx = g or x = bg , thus the line
CM is known to become horizontal.
Scholium 1.
493. Moreover since from the general equation little can be concluded about the nature of
the curve,, we will pursue this inquiry further with specific examples. Moreover we
assume such examples, in which the formula
bk m dq
even admits to integration by
gk m −bmq m
logarithms, from which we arrive at finite expressions, from which the nature of the
curve is easily seen . [From this paragraph it can be concluded that Cotes' formula was
not known by Euler in the year 1736. P. St.]
Example 1.
494. Therefore let the resistance be proportional to the speeds ; then m = 12 . Putting AC =
a; since the speed, that the body acquires on falling through AC, must correspond to the
height b, then [p. 250]
(486). Now this gives
2
q = xz or q = z 2
x
and
which integral is thus to be taken, in order that on putting z = x or q = 1 makes x = a or to
the assigned value of this. Hence this integral becomes :EULER'S MECHANICA VOL. 2.
Chapter 3a.
page 383
Translated and annotated by Ian Bruce.
2
which equation with z 2
x
substituted in place of q goes over into this equation :
If q = 1, then this becomes :
Moreover on putting q = 1 + dq; there is obtained :
But since 1 is the cosine of the angle MAC, then dq is
q
equal to the sine of this angle. On which account the
increment of x is infinitely less than the increment of the angle
MAC with MA incident on CA, from which it follows that the
tangent of the curve at C is horizontal; the tangent of this
curve at infinity or the asymptote is AE, with the cosine of the
angle EAC becoming
b
. Moreover this curve on the other
g k
side of the vertical AC has an arc similar and equal to CMD.
Scholium 2.
495. Indeed generally it is also possible to show that the tangent of the curve at C must be
horizontal. For on putting n = 1 in the series expressing x there is obtained :
[p. 251] n in increased by the element dn; and there is obtained the momentary increment
of AC equal to
Now let 1n be the cosine of the angle MAC and thus the sine is equal to
( n 2 −1)
=
n
2dn
on putting 1 + dn in place of n. On account of which the increment of AC is infinitely less
than the increment of the angle; and thus AC is normal to the curve DMC.
Example 2.
496. Let the resistance be proportional to the square of the speed, then m = 1 and on
putting AC = a; the equation becomes :
Now it is then the case that q = n = xzEULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 384
and
Hence there is obtained :
and hence it follows that :
on putting this value of a in place of b. Moreover this equation is used to construct the
curve most conveniently :
in which z is AM and q is the secant of the angle MAC.
Scholium 3.
497. In the solution of the problem in finding the equation of the curve CMD we have
been using a certain sum of that series ; [p. 252] now it is possible to elicit the same
equation without the series in the following manner. Since
this equation expresses the nature of the curve sought, if we put v = b after the integration
and xz in place of n. On account of which
is differentiated, on putting not only v, but also n to be variable, and then v is put equal to
the constant b and xz in place of n, the differential equation is obtained for the curve
sought. So that this can be effected, I put n = 1m , when there is produced
p
For the sake of brevity we put
and the differential equation is equal to this :
dx = Pdv + Qdp ,
if p is also taken as a variable. But since P is a function of zero dimensions of v and p,
then [see E45 in this series of translations]
x = Pv + Qp
and thusEULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
Q = xp − Pv
.
p
page 385
Therefore with this value substituted in place of Q there is produced :
−1
Now n m is restored in place of p and there arises :
in which equation n has been taken equally variable with both v et x. Now put v = b,
dv = 0 and n = xz and this equation is had : [p. 253]
which agrees with the equation found above.
PROPOSITION 57.
Problem.
498. If the resistance were in some multiple ratio of the speed, to find the curve (Fig.61),
which has this property, that a body descending on any chord AM arrives at M from A in
a given constant time.
Solution.
With the vertical AC drawn, put AP = x, AM = z and let n = xz .
With the speed at M corresponding to the height v, and the
m
resistance equal to v m let the time be t in which the body descends
k
along AM , which must be a constant quantity. From the preceding
we have
(485). It is needed in finding the nature of the curve AMC that either
equation is to be integrated, if it is possible, and the value of v from
the one equation is substituted into the other equation and then xz is written in place of n,
with which accomplished an equation is had between x and z expressing the nature of the
curve. [p. 254] But if the integration cannot be performed conveniently, either equation is
to be differentiated on putting n to be a variable, and afterwards on putting dt = 0, from
the two equations found v must be eliminated, from which an equation is producedEULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 386
z
containing only n and x, which as n = x shows the nature of the curve sought. Towards
doing this, putting n = 1m , from which we have :
p
Of the former of these equations, by taking p to be a variable also, the differential has
now been found :
(497). To the other equation to be differentiated I put :
and it becomes :
dt = Pdv + Qdp .
Moreover, since P is a function of v and p of dimensions − m − 12 , then
( 12 − m)t = Pv + Qp
and hence
With which value substituted in place of Q there is produced :
Now let t = 2 c and dt = 0; we have :
From these two equations dv is eliminated and there comes about :
or [p. 255]
on putting x = rp. This value is substituted in place of v in the equationEULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 387
or in this
Indeed in the case is which m = 12 or the resistance is proportional to the speeds, then the
equation becomes pdv = vdp or v = αp and
thus it follows to be zz = ax; as in this hypothesis of the resistance the curve AMC is a
circle everywhere as in a vacuum. According to other hypotheses of the resistance, unless
the equation for either variable can be integrated, on eliminating v a difference of the
differentials [i. e. a second – order differential equation] equation is had expressing the
nature of the curve between z and x. Q.E.I.
Corollary 1.
499. If we put v = up, then:
pdv–vdp = ppdu.
And hence this arises
which value substituted in the equation
gives an equation between p et r, from which an equation is formed between x and z. [p.
256]

Corollary 2.

500. Hence in the medium, which offers resistance in the simple ration of the speeds, it is
apparent that the curve AMC is a circle. And thus according to this hypothesis of the
resistance the times of the descents along particular chords drawn from the point A are
equal to each other.

Example 1.
\
501. Let the resistance be proportional to the square of the speeds ; then m = 1 and
or Now besides the time
or thus this becomes :
Hence on eliminating v and with xz put in place of n there is obtained:
or

In this case the curve is
if therefore putting AC = a, it becomes [p. 257]
thus it is
or
Therefore
is the equation for the curve AMC. If the resistance should be very small, then the
quantity k is extremely large and thus :
and the logarithm of this is equal to :

In a similar way,
And on this account this equation is obtained for the curve AMC :
or
Hence it is observed, if the resistance completely vanishes, or k is made infinitely great,
the equation becomes ax = z 2 and thus the curve is the circle AMC. But if the medium
were the rarest, then
and on differentiation,
If now this becomes zdz = xdx, then the applied line PM has a maximum value or it is
the place where the tangent to the curve is vertical, clearly
thus the equation becomes :
from which equation the value of z is approximately
and [p. 258]
Therefore the curve is widest above the middle and is wider everywhere than the height
AC.

Corollary 3

502. Therefore if [another] straight line or curve is a tangent to this curve AMC at M,
thus so that it is situated wholly outside the curve AMC, the body released from A arrives
faster by descending along the chord AM than upon any other straight line drawn from A
to that other curve.EULER'S MECHANICA VOL. 2.
Chapter 3a.
Translated and annotated by Ian Bruce.
page 390
Example 2.

503. Let m be a positive number and the resistance is very small; then k is a very large
quantity and hence 

On account of which:
and hence there is produced :
and
Moreover with these values substituted, this equation is produced : [p. 259]
Since now n = xz , this equation is obtained :
or
if the medium is very rare. Thus it is apparent, if the resistance vanishes completely, for
the equation be become z 2 = gcx or the curve AMC is a circle of diameter AC.

Scholium.

504. Therefore if the curve AMC is known and any line is given, it is possible to
determine the straight line AM, upon which the body descending from A arrives at the
given line the quickest. Cleary the curve AMC has to be constructed, which the given line
touches at some point M; and the right line AM is that line, upon which the body by
descending from A quickest arrives at the given line. And in a like manner in the
preceding problem, if the right line or curve touches the curve CMD (Fig. 60) at M, the
body by descending from A along AM as far as to the tangent line to the curve CMD
acquires a greater speed than by descending along another right line drawn from A to that
line. Therefore from these it is possible to solve problems, in which the right line is
required drawn from A to the given line, upon which the body on descending either
acquires the maximum speed or arrives the quickest at that line. [p. 260] On account of
which we will not tarry longer with these problems, but we progress to the consideration
of ascents upon given right lines.

