---
title: "Kinetic potential"
heading: Part 3
description: ""
weight: 15
c: "darkslategray"
---


## § 3. The derivation of the kinetic potential from the value of energy

For the physical investigations, it is usually easier and more certain to recognize what
the factors are that influence the energy supply of any system of bodies, and thus, to
determine the value of the function E, than it is to find all of the laws of the variations
and determine the kinetic potential from that. We thus come to the examination of the
extent to which the latter can be determined from the value of the energy supply.
 We assume that the quantity E has been found as a function of the pa
 and qa . 

For the form of that function, equation (4) implies that:

(4) 

<!-- E = H −
H
q
q
  ∂
⋅   ∂   ∑ a
a a -->

It follows from this that:

(7) E

<!-- q
∂
∂ b
 = −
2H
q
q q
  ∂
⋅   ∂ ∂   ∑ a
a a b -->

For the variation of the function Φ that is given in equation (1a
) that is necessary in
order to construct the equations of motion, it must be assumed that the first and second
differential quotients of H always remain finite along the path that is traversed by the
system. 

Thus, it follows from equation (7) that when all qa = 0, all ∂E / ∂qa
 will also be
equal to zero.

 Other restrictions of the function E that are implied by the physical interpretation
might be mentioned only briefly here.
 1) For a free system, the coordinates that are involved refer to only the relative
positions of the masses of the system, because the same process of motion must be
capable of proceeding for the same relative positions of the masses everywhere in space.
 2) The value of E must have a minimum for finite separations of the masses and
finite velocities; otherwise, the supply of work in the system would be infinitely large.
Thus, the value of E must necessarily be a positive quantity for infinitely-increasing qa
 . I 
Helmholtz – On the physical meaning of the principle of least action. 19
have sought to show the inadmissible consequences that follow from the opposite
assumption for the electrodynamic theory of W. Weber (*
).
 Equation (4) next easily implies that when H can be represented as a sum of
homogeneous, entire functions of the qa
 of differing degrees, the same thing will be true
for E. If we denote a homogeneous function of degree n of the qa
 by Pn , and if:
(7a
) H = ∑[ ] Pn
n
then
(7b
) E = ∑[(1 ) ] − ⋅Pn
n
n ,
or:
E = P0 – P2 – 2P3 , etc.

The terms P1 of first degree drop out from the value of E, P0 corresponds to the potential energy, which is independent of the motion, which we have denoted by F
above, and P2, to (− L). Higher terms enter into the problems of the mechanics of
ponderable bodies only in the altered cases in which one eliminated certain coordinates
pc
.
 Moreover, the problem that was posed can also be solved when E is an entirely
arbitrary function of the velocities that satisfies only the condition that was posed above
that, from equation (7), all ∂E / ∂qa
 will approach the value zero when the qa
 = 0. For our
purposes, it will be sufficient to retain the determination that was made above, in which
the coefficients in the system of equations (7) should be finite, although there will also be
cases in which those integrable coefficients would become infinite.
 In order to solve our problem, we would like to set:
(8) qa
 = x ⋅ qa
 ,
in place of the qa
 in the values of E and H, and understand x to mean a variable factor
whose variation will indeed change the absolute values of the qa , but not their mutual
ratios.
 After that substitution has been made, I will denote the functions H and E by H′ and
E′. One then has:
(8a) <!-- 

E
x
∂ ′
∂
=
E
q
  ∂
⋅   ∂   ∑ a
a a
q . -->

Since all ∂E / ∂qa = 0 when all qa
 = 0, from the convention that was made for equation
(7), but, from equation (8), that will happen only when x = 0, that will imply that:

 (*
) This Journal, Bd. 72, pp. 85, § 4 to § 7; Bd. 75, pp. 35-62. – Helmholtz, Gesammelte
Wissenschaftliche Abhandlungen, Bd. I, pp. 684. 
Helmholtz – On the physical meaning of the principle of least action. 20
(8b) 

E
x
∂ ′
∂
= 0, when x = 0,


For very small x, ∂E / ∂x must become proportional to
x itself, if not a higher power of x. On the other hand, we have:

<!-- H
x
∂ ′
∂
 =
H
q
  ∂
⋅   ∂   ∑ a
a a
q ,
so:
(8c
) x ⋅
H
x
∂ ′
∂
=
H
q
q
  ∂
⋅   ∂   ∑ a
a a
 = − E′ + H′, -->

Therefore:
(8d) 

<!-- E
x
∂ ′
∂
 = − x ⋅
2
2
H
x
∂ ′
∂ -->

If yet a second solution exists for the differential equation (8c):
(8c) 

<!-- E′ = H′ − x ⋅
H
x
∂ ′
∂ -->

which we would like to denote by H″, then:

<!-- 0 = H′ – H″ – x ⋅
x
∂
∂
[H′ – H″] ;
i.e.:
log (H′ – H″) = log x + log C,
or
H′ – H″ = x ⋅ C, -->


in which C can be a function of the qa. 


However, if (H′ – H″) can also be represented as
a function of the qa , which are free of x, then it can be only homogeneous of first degree.


We now need only to find a particular integral of equation (8c).

We will obtain one when we first write equation (8c) for x = 0:
E0 = H0 , and deduce this from (8c):

<!-- (E′ – E0) = (H′ – H0) – x ⋅
x
∂
∂
[H′ – H0]. -->


Dividing by x 2
 will give this: 

<!-- − 2
1
x
(E′ – E0) = H H0
x x
∂   ′ −
  ∂   . -->

From the discussion that was made for (8b), the quantity on the left-hand side is also
finite for x = 0, and we then obtain by integrating between the limits x = 0 and x = 1:

<!-- (8f
) H′ – H0 = −
1
0
2 0
E E
x
′−
∫
⋅ dx + H1 , -->

in which the integration constant H1 , as was remarked, can be any homogeneous function
of degree one in the qa

E is then derived uniquely from H by means of equation (4), while in the derivation
of H from E, the function H1, which corresponds to the “hidden” motions, will remain
undetermined. Whether such terms of first degree mix with each other will be ascertained
in special problems mostly from the conditions under which the motion can take proceed
backwards.

If one then knows which physical quantities in the value of E in the problem in
question are to be treated as coordinates and which, as velocities then one can, as a rule,
solve the problem that was posed here. However, the opposite cases can occur in which
resolving the state question seems to be uncertain.


