---
heading: Section 30
title: "What is the Gauge Group of the Standard Model?"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 58
---


## 2.6.3 What is the Gauge Group of the Standard Model?

We all know the answer to the question in the heading. The gauge group of the Standard Model is

G = U (1)Y ⇥ SU (2) ⇥ SU (3)

Or is it?

The fermions in a single generation sit in the following representations of G, Leptons: 

lL : (2, 1) 3
eR : (1, 1) 6
Quarks:
qL : (2, 3)+1
uR : (1, 3)+4
dR : (1, 3) 2
)(z2e , z3e )Y = (1, 0) 3
)(z2e , z3e )Y = (1, 1)+1
)(z2e , z3e )Y = (0, 1) 2
)(z2e , z3e )Y = (0, 0) 6
)(z2e , z3e )Y = (0, 1)+4

where the subscript denotes U (1)Y hypercharge Y , normalised so that Y 2 Z. We could add to this the right-handed neutrino ⌫R which is a gauge singlet. 

In the table above, we have also written the charges z2e and z3e under the Z2 ⇥ Z3 centre of SU (2) ⇥ SU (3).

Finally, the Higgs boson sits in the representation (2, 1)3 ) (z2e , z3e )Y = (1, 0)3 .
Each of these representations has the property that

<!-- Y = 3z2e
2z3e mod 6 -->

This means that there is a Z6 subgroup of G = U (1)Y ⇥ SU (2) ⇥ SU (3) under which all the fields are invariant: we must simultaneously act with the Z6 = Z2 ⇥ Z3 centre of SU (2) ⇥ SU (3), together with a Z6 ⇢ U (1)Y . 

Because nothing transforms under this Z6 subgroup, you can sometimes read in the literature that the true gauge group of the Standard Model is

<!-- U (1)Y ⇥ SU (2) ⇥ SU (3)
G=
(2.82) -->
where = Z6 . 

But this is also too fast. The correct statement is that there is a fourfold
ambiguity in the gauge group of the Standard Model: it takes the form (2.82), where
is a subgroup of Z6 , i.e.
= 1, Z2 , Z3 , or Z6

We note in passing that we can embed the Standard Model in a grand unified group, such as SU (5) or Spin(10), only if = Z6.

The choice of does not affect any local correlations functions and, in particular, does not affect physics at the LHC. 

Nonetheless, each choice of defines a different theory and, in principle, the distinction could have observable consequences. 

One place that the difference in shows up is in the magnetic sector.

Previously we discussed the allowed ’t Hooft lines. However, there is a folk theorem that when a quantum field theory is coupled to gravity then any allowed electric or magnetic charge has a realisation as a physical state. 

In other words, particles (or groups of particles) should exist with each of the allowed electric and magnetic charges.

We’ll see in Section 2.8 how magnetic monopoles can arise as dynamical particles in a non-Abelian gauge theory.

The arguments for this are far from rigorous and, for magnetic charges, boil down to the fact that an attempt to define an infinitely thin ’t Hooft line in a theory coupled to gravity will result in a black hole. 

If we now let this black hole evaporate, and insist that there are no remnants, then it should spit out a particle with the desired magnetic
charge.

So what magnetic monopoles are allowed for each choice of ? First, let’s recall how
electromagnetism arises from the Standard Model. The electromagnetic charge q of
any particle is related to the hypercharge Y and the SU (2) charge ⌧ 3 by

<!-- q=
Y
+ ⌧3
6 -->

This gives us the familiar electric charges: for the electron q = q = +2/3; and for the down quark q = 1/3.
1; 

For the up quark We denote the magnetic charge under U (1)Y as mY . As we explained in Section 2.5.2,
when a Higgs field condenses, many of the magnetically charged states are confined. In
the Standard Model, those that survive must have
6mY 
= z2m mod 2
2⇡

The magnetic charge under U (1)Y and SU (2) then conspires so that these states are blind to the Higgs field. For such states, the resulting magnetic charge under electromagnetism is

m = 6mY

We see how the global structure of the gauge group affects the allowed monopole charge. Suppose that we take = 1. 

Here, the monopoles must obey the Dirac quantisation condition with respect to each gauge group individually.

This means that mY 2 2⇡Z, and so the magnetic charge of any particle is quantised as m 2 12⇡Z. This is six times greater than the magnetic charge envisaged by Dirac.

Of course, Dirac only knew about the existence of the electron with charge q = 1. The quarks, together with the structure of the electroweak force, impose a more stringent constraint.

In contrast, if = Z6 , more magnetic charges are allowed. This is entirely analogous to the situation that we saw in the previous section. The Dirac quantisation condition now imposes a single constraint on the combined gauge charges from each factor of the
gauge group, 
<!-- 6Y mY
3z2e z2m + 2z3e z3m
2 6Z
2⇡ -->

But this gives us more flexibility. Now we are allowed a magnetic monopole with mY = 16 ⇥ 2⇡ provided that it also carries a magnetic charge under the other groups,
z2m = 1 and z3m = 1. In other words, the Standard Model with
= Z6 admits

the kind of magnetic monopole that Dirac would have expected, with m = 2⇡. 

Of course, this obeys Dirac quantisation with respect to the electron. But it also obeys Dirac quantisation with respect to the fractionally charged quarks because it carries a compensating non-Abelian magnetic charge. 
