---
title: "Formulation of the principle"
# date: 2025-05-15
heading: Part 1c
description: ""
weight: 7
c: "darkslategray"
---



In § 5, Hamilton’s theorem, in its general form, will be recapitulated, and in § 6, the reciprocity theorem that flows from it for the changes in the forward and reverse motion that result from small impulses after a certain time has elapsed will be given. 

Some reciprocal relationships that I myself have verified for sound and light in previous papers, but only for systems at rest, fall within that scope.

Finally, in § 7, the moment of motion shall be introduced in place of the velocities, which will yield another form of the variational problem, and along with the alreadyknown altered representations of the values of the force, another reciprocity law for forward and backward motion, as well.


## 1. Formulation of the principle

I assume that the instantaneous state of the system of bodies in question is given completely by a sufficient number of mutually-independent coordinates pa ; I denote the
velocities of evolution by:

<!-- (1) qa
 =
dp
dt
a
. -->

Furthermore, I let Pa  denote the force with which the system of moving bodies acts upon the change in the coordinate pa , such that (− Pa) will be the external force that must act
upon the system in the direction of the coordinate pa
 in order for the assumed motion of
the system to be able to happen in the assumed way.
 The forces Pa
, which were introduced by Lagrange, are, in general, aggregates of
force components that themselves can act upon different parts of the system, and thus
their magnitudes and composition are defined in such a way that (Pa
⋅ dpa
) is the work
that the force Pa  does outwardly when the coordinate changes from pa
 to (pa + dpa
),
whereas Pa
 will perform no work when pa
 remains unchanged while arbitrary variations
of the remaining coordinates pa
 occur.


In the sequel, we shall assume that the quantities Pa are functions of time, but they are independent of the coordinates during the given period from t = t0 to t = t1 . 

Let H be a function of the coordinates and velocities, of which, we will first demand only that it must have finite first and second differential quotients with respect to pa and qa at all positions of the path that evolves during the stated time period. Moreover, we define the integral:

<!-- (1a
) Φ =
1
0
[ ]
t
t
dt H P p  
⋅ + ⋅     ∫ ∑ a a
a
,  -->

in which the pa are varied in such a way that their variations δpa
 will be zero for t = t0 and
t = t1 , but they will be arbitrarily-differentiable functions of time at the intermediate
times. It then follows from known methods of the variational calculus that one will have:
(1b
) δΦ = 0
when one has:
<!-- (1c
) 0 = Pa
 +
H d H
p dt q
∂ ∂ 
−   ∂ ∂ a a   -->
during the duration of the motion.
 As is known, these are the equations of motion for the system in the form that was
given by Lagrange.


Elimination of coordinates. In the original applications of the principle to the
motions of a free system of material points, as I already remarked in the introduction, H
had the form:

H = F – L,

in which F shall be a function of only the pa , and L shall be a homogeneous function of
degree two of the qa whose coefficients depend upon the pa. 

 For a free system, the number of coordinates pa is 3 times as large as the number of mass points that are
present.

However, in many cases, a decrease in the number of coordinates can occur without
changing the form of the representation that was given in equations (1a
), (1b
), and (1c
).

Among these cases, the one that has been treated best up to now is then one in which the degrees of freedom of the system are restricted by so-called fixed constraints, which can be expressed mathematically as equations in the coordinates. The composition of the function H from F and L that was given above and the behavior of the last two functions will not change as a result of that, but the number of variable coordinates can be reduced substantially.

Another noteworthy reduction in the number of coordinates occurs when individual
ones of them, which we would like to denote by the index b, appear in the values of H
only through their differential quotients qb, so the corresponding forces Pb
 need to be equal to zero. 

Under these circumstances, equations (1c), which express the value of the

<!-- Pb
, will reduce to:
(2) 0 = d H
dt q
  ∂
  ∂  b
or
(2a
) H
q
∂
∂ b
= − cb -->

One can employ these equations, which are linear in the qa (qb , respectively), to
express the qb  in terms of the remaining velocities and the pa , and then eliminate them
from the value of H. We denote the expression for the value of H that arises from this
elimination by H. One will then have:

<!-- p
∂
∂ a
H
 =
H H q
p q p
∂ ∂  ∂
+ ⋅   ∂ ∂ ∂   ∑
b
a b a b -->



Thus, with consideration given to (2a):

<!-- H
p
∂
∂ a
 = [ ] c q
p
∂     − ⋅
∂   ∑ b b
a b
H .
If we set:
(2b
) H − ∑[ ] c q⋅
b b
b
 = H′ -->


then we will find that:

<!-- H
p
∂
∂ a
=
H
p
∂ ′
∂ a
, -->

and likewise:

<!-- H
q
∂
∂ a
=
H
q
∂ ′
∂ a
,
(2c
) pa
 = −
H d H
p dt q
∂ ∂ ′ ′  
+   ∂ ∂ a a   -->
