---
heading: "Part 6.2"
title: "Stabilizer Subgroup"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---



If we act on the space of connections using the natural right action of the inhomogeneous gauge group G we may ask what the stabilizer subgroup is for the Levi-Civita spin connection A0. To this end, solving for g ∈ G stabilizing A0 we have:

<!-- 0 = A0 · g − A0 = A0 · ε + $ − A0 = (A0 + ε
−1
· d0ε + $) − A0 (6.6)
implying
$ = −ε
−1
dA0
ε (6.7)
so that the flipped ˆτ map:
τˆ0 : H −→ G (6.8)
given by:
τˆ0(h) = (h, −h
−1
d0h) (6.9) -->

provides a parameterization.


## 6.3 G as Principal bundle: Action by Tilted Gauge Transformations Rule

The choice of a base connection A0 determines a surjection

<!-- πA0
: G −→ N (6.10) -->

given by

<!-- πA0
(g) = πA0
((ε, $)) = ε$ε−1 + (dA0
ε)ε
−1
(6.11) -->

which can be taken to be the projection map in the homogeneous principal H-fibration:

<!-- H ,→ PH = G
↓ πA0
B = G/HτA0
= N
(6.12) -->

determined by the right action of H as tilted subgroup on G

<!-- g · τA0
(h) = (ε, $) · τA0
(h) = (ε · h, h−1$h − h
−1
(dA0 h)) (6.13) -->

via the τA0 homomorphism.

This is transliterated Hindi for slanted or crooked and got stuck in the author’s head
many years ago via his wife’s usage. Seedhe means straight by the same token.

Lemma 6.3 The map πA0, is the projection map for the natural right action of τA0
(H) on G.

<!-- Proof:
πA0
(g ·τA0
(h)) = πA0
((ε, $)·(h, −h
−1
dA0 h)) = πA0
((ε·h, h−1
·$·h−h
−1
dA0 h))
(6.14)
= (ε · h)(h
−1$h − h
−1
dA)h)(ε · h)
−1 + (dA0
(ε · h))(ε · h)
−1
= (ε·h·h
−1$h·h
−1
·ε
−1−ε·h·h
−1
dA)h)·h
−1
·ε
−1+((dA0
ε)·h))·h
−1
·ε
−1+(ε·dA0
(h)))·h
−1
·ε
−1
= ε · $ · ε
−1 − ε · (dA)h) · h
−1
· ε
−1 + (dA0
ε) · ε
−1 + ε · (dA0 h) · h
−1
· ε
−1
= ε · $ · ε
−1 + (dA0
ε) · ε
−1 = πA0
((ε, $)) = πA0
(g) -->


As a benefit of this homogeneous principal fibration, we also gain a left action
of G on B = N via Lemma 6.4 The rule

<!-- g · γ = (ε, $) · γ = ε($ + γ)ε
−1 + (dA0
ε)ε
−1
(6.15) -->

determines a left group action of G on N .

Proof: The lemma can be seen from direct application of the preceding discussion and rules:


<!-- (g1 · g2) · γ = ((ε1, $1) · (ε2, $2)) · γ = (ε1 · ε2, Aut(ε
−1
2
, $1) + $2) · γ (6.16)
+(ε1 · ε2)(Aut(ε
−1
2
, $1) + $2 + γ)(ε1 · ε2)
−1 + (dA0
(ε1 · ε2))(ε1 · ε2)
−1
= ε1 · ε2 ·((ε
−1
2
·$1 · ε2)+$2 +γ)· ε
−1
2
· ε
−1
1 + ((dA0
ε1)· ε2 +ε1 ·(dA0
ε2))· ε
−1
2
· ε
−1
1
= ((ε1·$1·ε
−1
1
)+ε1·(ε2·$2·ε
−1
2
)·ε
−1
1 +ε1·(ε2·γ·ε
−1
2
)·ε
−1
1 −(dA0
ε1)·ε
−1
1 −ε1·((dA0
ε2)·ε
−1
2
)·ε
−1
1
= ε1 · (ε2 · ($2 + γ) · ε
−1
2 + (dA0
ε2) · ε
−1
2 + $1) · ε
−1
1 + (dA0
ε1) · ε
−1
1
= (ε1, $1) · ((ε2, $2) · γ) = g1 · (g2 · γ) -->






Lemma 6.5 The choice of a base connection A0 also determines a map µA0

<!-- : G −→ A × A (6.17) -->

into the space of “bi-connections” A × A according to:

<!-- µA0
(g) = µA0
((ε, $)) = (A0 + $, A0 · ε) ∈ A × A (6.18)
= (A0 + $, A0 + ε
−1
(dA0
ε)) (6.19) -->

so that the map µA0 of right H spaces is HτA0-equivariant.


Proof: The proof is immediate according to the following:

<!-- µA0
(g · τA0
(h)) = µA0
((ε, $) · τA0
(h)) = µA0
((ε, $) · (h, −h
−1
dA0 h)) (6.20)
= (dA0 + h
−1$h + h
−1
(dA0 h), dA0 + h
−1
(ε
−1
(dA0
ε))h + h
−1
(dA0 h)) ∈ A × A
= (A0 + $, A0 + ε
−1
(dA0
ε)) · h = µA0
(g) · h
QED -->

Definition 6.6 The map µA0 will be called the Bi-Connection map in what follows.

If we use the natural action of HτA0 on A to form an associated bundle of affine spaces with total space TA, the bi-connection can be seen as determining two natural sections σ1, σ2 depicted below as:

<!-- A ,→ TA
π ↓↑ σ1,2
B
(6.21) -->

The values of these two sections σ1,2 will be known as the A and B connections respectively, written as

<!-- Aω = ∇0 + $ω Bω = ∇0 + ε
−1
ω (∇0
εω) (6.22) -->

when needed separately.

