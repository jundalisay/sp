---
heading: "Part 5.2"
title: "Infinite Dimensional Function Spaces: A, H, N"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---


The so-called Gauge Group of automorphisms of PH is defined to be:

H = Γ∞(PH ×Ad H) (5.3)

where the space of connections for PH
A = Conn(PH) (5.4)

is an affine space modeled on the right H-module

N = Ω1
(Y, ad(PH)) (5.5)

which carries a right action of the group

A × H −→ A (5.6)

so that the affine difference map

δ : A × A −→ N δ(A, B) = A − B ∈ N (5.7)

is an H-equivariant map of right H-spaces.


## 5.3 Inhomogeneous Gauge Group: G

The reliance on affine Minkowski Space together with its Lorentz and Poincare
symmetry groups is somewhat curious in the presence of General Relativity.
Yet given the success of analysis on affine space we are given to speculate that
fundamental physics may in fact be reliant on an affine space as more than an
approximation or pedagogical aid.


The gauge group H can be augmented (in analogy to the Lorentz Group
SL(2, C) to become a subgroup of its own natural inhomogeneous extension.

Definition 5.1 The Inhomogeneous Gauge Group G is defined (in analogy to the Poincare group) to be the semi-direct product

G = H n N (5.8)

of the gauge group H with the space of ad-valued one-forms N = Ω1
(ad(PH))

viewed as a right H-module, so that the explicit group multiplication rule:

<!-- g1 · g2 = (ε1, $1) · (ε2, $2) = (ε1 · ε2, Aut(ε
−1
2
, $1) + $2) (5.9) -->

for all εi ∈ H and $j ∈ N defines the semi-direct product structure.


## 5.4 Natural Actions of G on A.

Having defined a new group augmenting the usual gauge group, it is worth
noting that the actions of H on the space of connections A extend naturally to
the new group G incorporating the additional inhomogeneous affine translations
N .

### 5.4.1 Right Action by G on A

This inhomogeneous gauge group G can be seen as acting naturally on the right
on the space of gauge potentials or connections A via

A · g = A · (ε, $) = A · ε + $ (5.10)

extending the usual right action A A · ε of an element of the gauge group
ε ∈ H on an arbitrary connection A ∈ A.


### 5.4.2 Left Action by G on A

We also have a left action of G on A via

<!-- g · A = (ε, $) · A = (A + $) · ε
−1
(5.11) -->

extending the left action A A · ε
−1 gotten from the usual right action of H
applied to the inverse element ε
−1 ∈ H


## 5.5 Fermions and SUSY

Super-symmetry has a curious status within both Mathematics and Physics. It
is both incredibly natural by some measures, as well as being rather artificial
by others. It is not a true symmetry, its ‘integrals’ are not real integrals, and
its ‘dimensions’ are not true dimensions. Nevertheless, the dictionary between
Bosonic and Fermionic constructions is astounding (at least to us). This is
interpreted by the author as consistent with a signature of a problem where
Super-symmetry is likely very important but somehow thoroughly misinstantiated by its often fanatical proponents compensating for its failure to materialize
in any physical experiment.

If super-symmetry is taken to be natural, then surely so-called super-space is
its most natural representation by an action. Here, it seems that affine nature of
Galilean transformations gives us an interpretation for super-symmetric charges
as the square roots of affine translations.

Yet, knowing that Minkowski space is simply an approximation to non-affine
spaces is somewhat discouraging if we are to build an entire theory that leans
so heavily on flat translations when both non-trivial geometry and topology
threaten to significantly complicate the picture. By contrast, the affine space of
gauge potentials is intrinsically affine in nature no matter what the geometry
and topology are on which those potentials live. This is why we find it more
appealing to see Fermionic ν and ζ as potential square roots of the as-if Galilean
group N = Ω1
(Y, ad). 

This is also theoretically appealing as the concept of
electrons and positrons being some kind of square roots of photons is potentially
very appealing given the role of Feynman diagrams in perturbation theory. The
Figure 4: ”Is the Electron a Square Root of a Photon?”
general rubric here is that expressions like (¯ν · ζ) can be given meaning directly
as elements of N while expressions like ¯ζa · ζb are harder to directly interpret as
translations without more machinery as they do not initially land in the proper
space N and would have to be moved in gauge-covariant fashion.
We may return to this in future work but do not wish to say much more as
the subject of modern SUSY is rather delicate given the steadfast failure of its
predicted space-time superpartners to materialize. We note however that the
zoo of sleptons, squarks, gluinos and the like are all based on internal symmetry remaining the same and space-time symmetry changing spin. 

In a theory such as GU, there is no internal symmetry. Ergo, the (infinite dimensional)
superpartners would not need to have the same internal quantum numbers anymore than they would need to carry the same space-time spins. 

If the universe is GU like rather than Standard-Model like, are the superpartners we seek already here and based on an affine space different from space-time with no-internal symmetry of which to speak?

## 5.6 Relationship of the Inhomogeneous Gauge Group to Standard Analysis

A brief digression is in order to relate what we are doing to the standard analysis of gauge potentials under gauge symmetry. To begin with, the usual object of study in quantum field theory is the space of connections modulo gauge
equivalence, or:

A/H (5.12)
in our notation.

This is equivalent, at an initially irrelevant level, to the expression
A/H = (H × A)/(H × H) (5.13)
by Cartesian product with a second copy of the gauge group in both numerator
and denominator.

But by the choice of a connection A0 we have A = N as our affine space now has an origin while we note that the Semi-direct product of topological groups is set theoretically a product of the underlying spaces if not exactly at the algebraic level. Thus we have:

<!-- A/H = (H × A)/(H × H) = (H n N )/(H × H) = G/(H × H) (5.14)
= (G/H)/H -->

and our investigations in this area are an analysis of the numerator quotient in
this context.
