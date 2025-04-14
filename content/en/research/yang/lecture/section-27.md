---
heading: Section 26
title: "Wilson Loops as Operators"
description: "In quantum field theory, states are defined as living on a spacelike slice of the system"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 54
---


## Wilson Loops as Operators

There is a slightly different perspective on Wilson loops that will also prove useful: we can view them as operators on the Hilbert space of states. 

Since we are now dealing with Hilbert spaces and states, it’s important that we are back in Lorentzian signature. 

In quantum field theory, states are defined as living on a spacelike slice of the system.

For this reason, we should first rotate our Wilson loop so that C is a spacelike, closed curve, sitting at a fixed point in time. 

The interpretation of the operator W [C] is that it adds to the state a loop of electric flux along C. 

To see this, we can again revert to the canonical formalism that we introduced in Section 2.2. The electric field is 

<!-- E i = i / Ai (x), so we have
i
E W [C] = tr P
✓
Ai (x)
I
A W [C]
C
◆ -->


which indeed has support only on C.

The expectation value hW [C]i is now interpreted as the amplitude for a loop of electric flux W [C]|0i to annihilate to the vacuum h0. 

In the confining phase, this is unlikely because the flux tube is locally stable. The flux tube can, of course, shrink over time and disappear, but that’s not what hW [C]i is measuring. Instead, it’s looking for the amplitude that the flux tube instantaneously disappears. 

This can happen only through a tunnelling effect which, in Euclidean space, involves a string stretched across the flux tube acting. 

This Euclidean action of this string is proportional to its area, again giving hW [C]i ⇠ e A with A[C] the minimal area bounding the curve.

In contrast, in the Higgs phase the string is locally unstable. Each part of the string can split into pieces and dissolve away. 

This is still unlikely: after all, it has to happen at all parts of the string simultaneously. 

Nonetheless, it is more likely than the corresponding process in the confining phase, and this is reflected in the perimeter law

<!-- hW [C]i ⇠ e μL . -->

## 2.6 Magnetic Probes

Much of our modern understanding of gauge theories comes from the interplay between electric and magnetic degrees of freedom. 

In the previous section we explored how Yang-Mills fields respond to electric probes. In this section, we will ask how they respond to magnetic probes.

A warning: the material in this section is a little more advanced than what we covered until now and won’t be required for much of what follows. (An exception is Section 3.6 which discusses discrete anomalies and builds on the machinery we develop here.) 

In particular, sections 2.7 and 2.8 can both be read without reference to this section.

### 2.6.1 ’t Hooft Lines

Our first task is to understand how to construct an operator that corresponds to the insertion of a magnetic monopole. These are referred to as ’t Hooft lines. 

For electric probes, we could build the corresponding Wilson line out of local fields Aμ . But there are no such fields that couple to magnetic charges. 

This means that we need to find a different way to describe the magnetic probes. 

We will achieve this by insisting that the fields of the theory have a prescribed singular behaviour on a given locus which, in our case, will be a line C in spacetime. 

Because such operators disrupt the other fields in the theory, they are sometimes referred to as disorder operators.

## ’t Hooft Lines in Electromagnetism

To illustrate this idea, we first describe ’t Hooft lines in U (1) electromagnetism. We have already encountered magnetic monopoles in Section 1.1. Suppose that a monopole of charge m traces out a worldline C in R3,1 . 

(We referred to magnetic charge as g in Section 1.1, but this is now reserved for the Yang-Mills coupling so we have to change notation.) For any S2 that surrounds C, we then have

<!-- Z
B · dS = m
(2.76)
S2 -->

We normalise the U (1) gauge field to have integer electric charges. As explained in Section 1.1, the requirement that the monopole is compatible with these charges gives the Dirac quantisation condition (1.3), which now reads

<!-- eim = 1
)
m 2 2⇡Z
(2.77) -->

For the magnetic field to carry flux (2.76), we must impose singular boundary conditions on the gauge field. As an example, suppose that we take the line C to sit at the spatial origin x = 0 and extend in the temporal direction t. 

Then, as explained in Section 1.1 we can cover the S2 by two charts. Working in polar coordinates with Ar = 0 gauge, in the northern hemisphere, we take the gauge field to have the singular behaviour

<!-- A !
m(1 cos ✓)
2r sin ✓ -->

as r ! 0There is a similar condition (1.7) in the southern hemisphere, related by a gauge transformation.

We now define the ’t Hooft line T [C] by requiring that we take the path integral only over fields subject to the requirement that they satisfy (2.76) on C. 

This is a rather unusual definition of an “operator” in quantum field theory. Nonetheless, despite its
unfamiliarity, , we can – at least in principle – use to compute correlation functions of
T [C] with other, more traditional operators.
