---
heading: Section 32
title: "The Infrared Phases of QCD-like Theories"
description: "This is the most subtle and interesting class of quantum field theories"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 62
---


## 2.7.2 The Infrared Phases of QCD-like Theories

We ignore the scalars and consider non-Abelian gauge theories coupled to fermions. 

In many ways, this is the most subtle and interesting class of quantum field theories. We will devote Sections 3 and 5 to elucidating some of their properties.

Here we start by giving a brief tour of what is expected from these theories.

Obviously, there are many gauge groups and representations that we could pick. 

We will restrict ourselves to gauge group SU (Nc ), where Nc is referred to as the number of colours. 

We will couple to this gauge field Nf Dirac fermions, each transforming in the fundamental representation of the gauge group. 

Here Nf is referred to as the number of flavours. We will further take the fermions to be massless, although we will comment briefly on what happens as they are given masses. 

This class of theories will be sufficient to exhibit many of the interesting phenomena that we care about.
Moreover, this class of theories boasts QCD as one of its members (admittedly you should relax the massless nature of the quarks just a little bit.)

At one-loop, the running of the gauge coupling can be read off from (2.83)

<!-- 1
11Nc
2
(4⇡)
3
1
1
= 2
2
g (μ)
g0
2Nf
log
3
✓
⇤2U V
μ2
◆
(2.84) -->

These theories exhibit different dynamics depending on the ratio Nf /Nc .

## The Infra-Red Free Phase

Life is simplest when Nf > 11Nc /2. In this case, the contribution to the beta function from the matter overwhelms the contribution from the gauge bosons, and the coupling g 2 becomes weaker as we flow towards the infra-red. 

Such theories are said to be infra-red free. This means that, for once, we can trust the classical description at low energies, where we have weakly coupled massless gauge bosons and fermions.
The force between external, probe electric charges takes the form 
<!-- Velectric (r) ⇠
1
r log(r⇤U V ) -->

which is Coulombesque, but dressed with the extra log term which comes from the running of the gauge coupling. 

This is the same kind of behaviour that we would get in (massless) QED. Meanwhile, the potential between two external magnetic charges takes the form Vmagnetic ⇠

<!-- log(r⇤U V )
r -->

The log in the numerator reflects the fact that magnetic charges experience a force proportional to 1/g 2 rather than g 2 .

When Nf = 11Nc /2, the one-loop beta function vanishes. To see the fate of the theory, we must turn to the two-loop beta function which we discuss below. 

It will turn out that the theory is again infra-red free.

These theories are ill-defined in the UV, where there is a Landau pole. However, it’s quite possible that theories of these types arise as the low-energy limit of other theories. 

## The Conformal Window

Next, consider Nf just below 11Nc /2. To understand the behaviour of the theory, we can look at the two-loop contribution to the beta function,

<!-- (g) = μ
dg
=
dμ
0g
3
+
1g
5
+ ... -->

with the one-loop beta function extracted from (2.84)

<!-- ✓
◆
1
11Nc 2Nf
+
0 =
(4⇡)2
3
3 -->

We won’t compute the two-loop beta function here, but just state the result:

<!-- ✓
◆
1
34Nc2 Nf (Nc2 1) 10Nf Nc
+
+
1 =
(16⇡ 2 )2
3
Nc
3 -->

Note that 1 > 0 as long as the number of flavours sits in the range Nf < 34Nc3 /(13Nc2 3). 

But 0 < 0 provided Nf < 11Nc /2 and so we can play the one-loop beta function against the two-loop beta function, to find a non-trivial fixed point of the RG flow, at which (g? ) = 0. This is given by

<!-- g?2 =
0
1 -->

Importantly, for Nf /Nc = 11/2 ✏, with ✏ small, we have g?2 ⌧ 1 and the analysis above can be trusted. 

We learn that the low-energy physics is described by a weakly coupled field theory which, as a fixed point of RG, is invariant under scale transformations.

This is known as the Banks-Zaks fixed point. There is a general expectation (although not yet a complete proof) that relativistic theories in d = 3+1 which are scale invariant are also invariant under a larger conformal symmetry.

At any such fixed point, the scale invariance is enough to ensure that both external
magnetic and electric probes experience a Coulomb force

<!-- V (r) ⇠
1
r -->

Such a phase could be described as a non-Abelian Coulomb phase, comprised of massless gluons and fermions.

What happens if we now lower Nf with fixed Nc ? The formal result above says that the fixed point remains (at least until Nf ⇡ 34Nc3 /(13Nc2 3) but the value of
the coupling g?2 gets larger so that we can no longer trust the analysis. 

In general, we expect there to be a conformal fixed point for

<!-- N? < Nf <
11Nc
2
(2.85) -->

for some critical value N? . This range of Nf is referred to as the conformal window.

The obvious question is: what is the value of N? ?

We don’t currently know the answer to this question. 

At the lower end of the conformal window, the theory is necessarily strongly coupled which makes it difficult to get a handle on the physics. 

There is evidence from numerical work that when
Nc = 3 (which is the case for QCD) then the lower end of the conformal window sits somewhere in the window N? 2 [8, 12], and probably closer to the middle than the edges. 

One would also expect the conformal to scale with Nc , so one could guess that N? ⇡ 3Nc to 4Nc . There are various arguments that give values of N? in this range,
but none of them are particularly trustworthy.

We’ve seen that there are a set of conformal fixed point, labelled by Nc and Nf in the range (2.85). 

We met such fixed points before in the course on Statistical Field Theory. 

In that context, we came across the powerful idea of universality: many different ultra-violet theories all flow to the same fixed point. 

This is responsible for the observation that all gases, regardless of their microscopic make-up, have exactly the same divergence in the heat capacity at their critical point. 

We could ask: is there a form of universality in gauge theories? In other words, can we write down two gauge theories which look very different in the  ultra-violet, but nonetheless flow to the same infra-red fixed point?

We don’t yet know of any examples of such universality in the QCD-like gauge theories that we discuss in these lectures, although this is most likely due to our ignorance.

However, such examples are known in supersymmetric theories, which consist of gauge fields, scalars and fermions interacting with specific couplings. In that context, it is known that supersymmetric SU (Nc ) gauge theories coupled to Nf fundamental flavours
flows to the same fixed point as SU (Nf Nc ) gauge theory coupled to Nf flavours.

(The latter flavours should also be a coupled to a bunch of gauge neutral fields.) Furthermore, the two descriptions can be identified as electric and magnetic variables for the system. 

This phenomenon is known as Seiberg duality which is not part of this work. 

<!-- However, it is a topic for a
different course. -->
