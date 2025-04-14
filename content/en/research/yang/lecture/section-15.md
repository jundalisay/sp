---
heading: Section 15
title: "Instanton Contributions to the Path Integral"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 30
---


## 2.3.3 Instanton Contributions to the Path Integral

Given an instanton solution, our next task is to calculate something. 

The idea is to use the instanton as the starting point for a semi-classical evaluation of the path integral.


We can first illustrate this in our quantum mechanics analogy, where we would like to compute the amplitude to tunnel from one classical ground state |x = ai to the other |x = +ai over some time T .

<!-- ha|e
HT
| ai = N
Z x(T )=+a
x(0)= a
Dx(⌧ ) e SE [x(⌧ )] -->

with N a normalisation constant that we shall do our best to avoid calculating. There is a general strategy for computing instanton contributions to path integrals which we sketch here. 

This strategy will be useful in later sections (such as Section 7.2 and 8.3 where we discuss instantons in 2d and 3d gauge theories respectively.) 

However, we’ll see that we run into some difficulties when applying these ideas to Yang-Mills theories
in d = 3 + 1 dimensions.

Given an instanton solution x̄(⌧ ), like (2.53), we write the general x(⌧ ) as

<!-- x(⌧ ) = x̄(⌧ ) + x(⌧ ) -->

and expand the Euclidean action as

<!-- SE [x(⌧ )] = Sinstanton +
Z
d⌧ x
x + O( x3 )
(2.54) -->

Here Sinstanton = SE [x̄(⌧ )]. There are no terms that are linear in x because x̄(⌧ ) solves the equations of motion. 

The expansion of the action to quadratic order gives the differential operator . The semi-classical approach is valid if the higher order terms give sub-leading corrections to the path integral. 

For our quantum mechanics double well potential, one can check that this holds provided ⌧ 1 in (2.52). For Yang-Mills, this requirement will ultimately make us think twice about the semi-classical expansion.

Substituting the expansion (2.54) into the path integral, we’re left with the usual Gaussian integral. It’s tempting to write Z x(T )=+a
<!-- x(0)= a
Dx(⌧ ) e
SE [x(⌧ )]
=e
Sinstanton
⇡
e
det1/2
– 58 –
Z
x(T )=0
x(0)=0
D x(⌧ ) e
x
x+O( x3 ) -->

This, however, is a little too quick. The problem comes because the operator has a zero eigenvalue which makes the answer diverge. 

A zero eigenvalue of occurs if there are any deformations of the solution x̄(⌧ ) which do not change the action. 

But we know that such deformations do indeed exist since the instanton solutions are never unique: they depend on collective coordinates. 

In our quantum mechanics example, there is a just a single collective coordinate, called ⌧0 in (2.53), which means that the deformation x = @ x̄/@⌧0 is a zero mode: it is annihilated by:


To deal with this, we need to postpone the integration over any zero mode. These can then be replaced by an integration over the associated collective coordinate. For our quantum mechanics example, we have
<!-- Z x(T )=+a
Z T
e Sinstanton
SE [x(⌧ )]
Dx(⌧ ) e
⇡
d⌧0 J
det0 1/2
x(0)= a
0 -->

Here J is the Jacobian factor that comes from changing the integration variable from the zero mode to the collective coordinate. We will not calculate it here. 

Meanwhile the notation det0 means that we omit the zero eigenvalue of when computing the determinant. 

The upshot is that a single instanton gives a saddle point contribution to the tunnelling amplitude,

<!-- NJ
ha|e HT | ai ⇡ KT e Sinstanton with K =
det0 1/2 -->

Note that we’ve packaged all the things that we couldn’t be bothered to calculate into a single constant, K.

The result above gives the contribution from a single instanton to the tunnelling amplitude. But, it turns out, this is not the dominant contribution. That, instead, comes from summing over many such tunnelling events.

Consider a configurations consisting of a string of instantons and anti-instantons.

Each instanton must be followed by an anti-instanton and vice versa. This configuration does not satisfy the equation of motion. 

However, if the (anti) instantons are well separated, with a spacing 1/!, then the configuration very nearly satisfies the equations of motion; it fails only by exponentially suppressed terms. 

We refer to this as a dilute gas of instantons.

As above, we should integrate over the positions of the instantons and anti-instantons.

Because each of these is sandwiched between two others, this leads to the integration

<!-- Z T
Z T
Z T
Tn
dt1
dt2 . . .
dtn =
n!
0
t1
tn 1 -->

where we’re neglecting the thickness 1/! of each instanton.


A configuration consisting of n instantons and anti-instantons is more highly suppressed since its action is approximately nSinstanton. 

But, as we now see, these contributions dominate because of entropic factors: there are many more of them. Summing
over all such possibilities, we have

<!-- ha|e HT | ai ⇠
X 1
n!
n odd -->

(KT e Sinstanton )n = sinh KT e Sinstanton where we restrict the sum to n odd to ensure that we end up in a different classical ground state from where we started. 

We haven’t made any effort to normalise this amplitude, but we can compare it to the amplitude to propagate from the state | ai  back to | ai,
<!-- h a|e HT | ai ⇠
X 1
(KT e Sinstanton )n = cosh KT e Sinstanton
n!
n even -->

In the long time limit T ! 1, we see that we lose information about where we started, and we’re equally likely to find ourselves in either of the ground states |ai or | ai. 

If we were more careful about the overall normalisation, we can also use this argument to compute the energy splitting between the ground state and the first excited state. 

As an aside, you may notice that the calculation above is identical to the argument for why there are no phase transitions in one dimensional thermal systems given in the lectures on Statistical Field Theory.

Now we can try to apply these same ideas to Yang-Mills instantons. Unfortunately, things do not work out as nicely as we might have hoped. We would like to approximate the Yang-Mills path integral

<!-- Z
Z = DA e SY M +iS✓ -->

by the contribution from the instanton saddle point. 

There are the usual issues related to gauge fixing, but these do not add anything new to our story so we neglect them here and focus only on the aspects directly related to instantons. 

(We’ll be more careful about gauge fixing in Section 2.4.2 when we discuss the beta function.)

Let’s consider the contribution from a single instanton. The story proceeds as for the quantum mechanics example until we come to discuss the collective coordinates. 

For the instanton in quantum mechanics, there was just a single collective coordinate ⌧0 . 

For our Yang-Mills instanton in SU (2), there are 8. 

Four of these are associated to translations in Euclidean spacetime; these play the same role as ⌧0
and integrating over them gives a factor of the Euclidean spacetime volume V T , with
V the 3d spatial volume.

Three of the collective coordinates arise from the global part of the gauge symmetry and can be happily integrated over. 

But this leaves us with the scale size ⇢. This too should be singled out from the path integral and integrated over.

We find ourselves with an integral of the form,

<!-- Z 1
2
2
Z⇡
d⇢ K(⇢) V T e 8⇡ /g ei✓
0 -->

where, as before, K(⇢) includes contributions from the Jacobians and the one-loop determinant. 

However, it is a function of the instanton scale size ⇢ and so we should do the hard work of calculating it.

We won’t do this hard work, in part because the calculation is rather involved and in part because, as we advertised above, the end result doesn’t offer quantitative insights into the behaviour of Yang-Mills. 

It turns out that K(⇢) causes the integral diverge at large ⇢. 

This raises 2 concerns.

1. It is difficult to justify the dilute instanton gas approximation if it is dominated by instantons of arbitrarily large size which are surely overlapping. 

2. More pressing, it is difficult to justify the saddle point expansion at all.

This is because, as we describe in some detail in the next section, the gauge coupling in Yang-Mills runs; it is small at high energy but becomes large at low energies. 

This means that any semi-classical approximation, such as instantons, is valid for describing short distance processes but breaks down at large distances. 

The fact that our attempt to compute the partition function is dominated by instantons of large size is really telling us that the whole semi-classical strategy has broken down. 

Instead, we’re going to have to face up to the fact that Yang-Mills is a strongly coupled quantum field theory.

It’s a little disappointing that we can’t push the instanton programme further in Yang-Mills. However, it’s not all doom and gloom and we won’t quite leave instantons behind in these lectures. 

There are situations where instantons are the leading contribution to certain processes. 

We will see one such example in Section 3.3.2 in the context of the anomaly, although for more impressive examples one has to look to supersymmetric field theories which are under greater control and beyond the scope of these lectures. 
