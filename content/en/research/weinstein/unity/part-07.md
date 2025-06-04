---
heading: "Part 7"
title: "The Augmented or Displaced Torsion"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---


The Torsion Tensor has always presented a puzzle. It is traditionally introduced very early on in the study of Riemannian geometry and is almost never heard from thereafter except in niche explorations. One modern interpretation of this stylized fact could be that the torsion of a connection is afflicted with a disease that keeps it from being ‘gauge covariant’ and thus useful to the mainstream of modern theory.

An important principal of some potential relevance here is seldom stated explicitly. It is that when faced with a mathematical disease, it is often advantageous to seek a second disease in the hopes that an even number of diseases might be poised to kill each other in pairs.


## 7.1 Augmented Torsion and its Transformations

Our strategy is to think as follows. There are effectively two different ways of
transforming a connection. One is by gauge transformation and the second is by
‘translation’ by adding to it an ad-valued 1-form on Y . Because these two group
actions have been intertwined within the inhomogeneous gauge group, there are
effectively two separate ways to transform the spin connection inherited from
the Levi-Civita connection of the metric. Taking their difference is meaningful
because both transformed connections carry exactly the same global disease that renders them non-gauge covariant. Therefore the ability to generate two separate connections with a common disease from a single group element in G
which is still a set theoretic if not algebraic product is meaningful.

Definition 7.1 There is a well defined map from the inhomogeneous gauge
group G to the space of generalized torsion tensors N viewed as a right Hmodule, given by:


<!-- δ ◦ µA0
: G −→ N (7.1) -->

so that we can define The Augmented Torsion Tensor Tg = Tε,$ = T((ε, $))
according to

<!-- Tg = δ(µA0
((ε, $))) (7.2) -->

which is given explicitly by:

<!-- Tg = $ − ε
−1
(dA0
ε). (7.3) -->

The Augmented Torsion is distinguished in that it is very well behaved under HτA0 transformations. This can be seen explicitly as: 

Lemma 7.2 The augmented torsion tensor as a map from G to N is equivariant
as a map of right HτA0-spaces.

Proof:

...
<!-- Tg·τA0
(h) = T(ε,$)·τA0
(h) = T(ε·h,h−1$h−h−1(dA0
h)) (7.4)
= h
−1$h + h
−1
(dA0 h) − (ε · h)
−1
(dA0
(ε · h))
= h
−1$h + h
−1
(dA0 h) − (h
−1
· ε
−1
)((dA0
ε) · h + h
−1
· (dA0 h))
= h
−1
($ − ε
−1
(dA0
ε))h = Ad(h
−1
, Tg)
QED -->


In essence, the group G is topologically the Cartesian product of two separate
groups acting on the common space A. The presence of a single connection ∇0
and a single element β = (εβ, $β) ∈ G leads to two separate new connections

<!-- A = (∇0
) · ε, B = (∇0
) · $ which in an affine space suggests taking a difference
A − B ∈ N which diagrammatically appears as -->

<!-- A
ε % &
∇0 × N
$ & %
A
(7.5) -->



## 7.2 Summary of spaces and maps

The following diagram summarizes much of what we have just discussed:
<!-- H
τA0
,→ G
µA0 −→ A × A δ −→ NHR
↓ πA0
AA0
∼= NGL
(7.6) -->

with respect to the integral spin fields. The addition of the half-integral spin fields leads to a sort of super-space like version of the above.
