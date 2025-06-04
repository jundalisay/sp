---
heading: "Part 6"
title: "The Distinguished connection A0 and its consequences"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---



All of the preceding is general and did not depend on the choice of any particular connection. However, besides the ability to contract and project within the Einstein-Riemann paradigm, the secondary benefit we have discussed is the existence of a distinguished Levi-Civita connection.

It is worth briefly recalling how this connection comes into being by summoned from the choice of metric. Let g ∈ Γ

<!-- 2
(S
2
(T
∗
))  -->

be a metric on the tangent bundle of a manifold M. Then if β ∈ Ω

<!-- 1
(T
∗
) is a one form on M and
g˜ ∈ Γ
2
(S
2
(T)) is the dual metric, then
∇gβ = dβ
|{z}
Λ2(T ∗M)
⊕ Lgβ˜ (g)
| {z }
S2(T ∗M)
| {z }
T ∗M⊗T ∗M
∈ Ω
1
(M, T ∗
) (6.1) -->


or, in other words, the exterior derivative is already half of a connection. To
get the other half, we use the remaining naturally occurring derivative (the Lie
derivative L(g)) to Lie differentiate a symmetric two tensor. The main trick,
however is that the metric is actually used twice, as the Lie derivative requires
a vector field to pick a direction. And since we are operating on a 1-form β. we
must turn it into a vector field using the same metric that is to be differentiated.
As such, the Levi-Civita connection is summoned via the Lie derivative’s ability
to complement the exterior derivative and provide its missing half.

We now assume, however, that there is a distinguished choice of connection
A0 (such as that which we have just constructed for a given metric), which has
been made and can be utilized in what follows. In our case, we begin with a
metric ג, which determines a connection Aleph ℵג on the bundle T X. At that
point, the connection ℵ determines a metric gℵ on T Y given the metric data
already present on the horizontal and vertical tangent sub-bundles HY and VY .
This, in turn, determines a Levi-Civita connection ∇gℵ = ∇0 which, by abuse
of notation, we will consider as determining a spin connection on the structure
bundle PH of Dirac spinors over Y . When we have temporarily fixed a given
metric ג on X giving rise to this spin connection on Y , we will refer to the
connection as A0 ≈ ∇0 ≈ d0 as needed and when the possibility of confusion is
likely resolved by context.

As a preliminary note, we remind ourselves that the choice of a distinguished
connection results in a canonical isomorphism A
A0∼= N giving us an action of G
on N induced from the right action of G on A. Thus, if a connection A ∈ A is
expressed relative to a base connection A0 as A = A0 + α, we now have a right
action of G on N which can be expressed via the explicit formula:


<!-- α · g = α · (ε, $) = ε
−1
(α)ε + ε
−1
(dA0
ε) + $ (6.2) -->

on the space of connections A.

## 6.1 The Tilted Map τ into G: the Homomorphism Rule 

Lemma 6.1 Given a base connection A0 ∈ A, the map

<!-- τA0
: H −→ G (6.3) -->

given explicitly by:

<!-- τA0
(h) = (h, δ(A0, A0 · h)) = (h, A0 − A0 · h) = (h, −h
−1
(dA0 h)) (6.4) -->

is an injective Lie Group homomorphism.


Proof: The map is clearly injective because it is the identity map onto and
into the first factor in the semi-direct product. To see that it is a Lie-group
homomorphism, we argue that:

<!-- τA0
(h1 · h2) = (h1 · h2, −(h1 · h2)
−1
(dA0
(h1 · h2))) (6.5)
= (h1 · h2, −((h
−1
2
· h
−1
1
)((dA0 h1) · h2 + h1 · (dA0 h2)))
= (h1 · h2, −(h
−1
2
· (h
−1
1
(dA0 h1)) · h2 + h
−1
2
· (dA0 h2))
(h1, −h
−1
1
(dA0 h1)) · (h2, −h
−1
2
(dA0 h2)) = τA0
(h1) · τA0
(h2) -->

There appears to have been multiple sign conventions and some notational shifts within the files from which this section was reassembled. We will endeavor to sort this out but there
may be 2 or more conflicting convetions in this section.

This subgroup τA0
(H) ⊂ G is important to our constructions and thus warrants a name to distinguish it from the more obvious H subgroup.
Definition 6.2 The image of H inside G under τA0 will be referred to as the
The Tedha8 Gauge Group HτA0

inside G, with the image of H simply included onto the first factor of G and sent to 0 in the second factor being referred
to as the Trivial or Seedhe Gauge Group to avoid confusion.

