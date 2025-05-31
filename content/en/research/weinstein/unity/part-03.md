---
heading: "Part 3"
title: "The Observerse Recovers Space-Time"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---



In order to make progress beyond modern General Relativity and Quantum Field Theory, Space-Time itself should be sacrificed from the outset as being fundamental.

As such, in Geometric Unity we will proceed without loss of generality to consider not a single space, but pairs of spaces linked by maps. 

The 3 main cases will be defined according to:

Definition 3.1 An Observerse is defined to be a triple (Xn, Y d
, {ι}) such that

<!-- ι : U
n
x −→ Y
d
g
(3.1) -->

are maps for local open sets U
n
x ⊂ Xn about some points x ∈ Xn
constituting local Riemannian embeddings for neighborhoods U
n into
a Riemannian manifold Y
d of equal or higher dimension inducing a
pull back metric gX = ι
∗
(gY ) and defining a normal bundle Nd−n
ι ⊂
T(Y ) with metric and its pull back ι
∗
(Nd−n
ι
) over Xn. The main cases
of this construction correspond to:
• TRIVIAL: The manifold Y = X and the map ι is the identity.
• EINSTEINIAN: The manifold Y = Met(X) is the bundle of
point-wise metric tensors over X and the maps ι = g under
scrutiny are sections of this bundle representing Riemannian or
Semi-Riemannian metric fields.
16
• AMBIENT: The manifold Y

is unconstrained beyond the condition of being an immersion.
where the first is presented to cover the case of ordinary space-times
without additional structure, and the last is included so as to allow for
full generality. In this work we will consider the strongest assumption
beyond those of Einstein by working within the Einsteinian Observerse to search for new physics. Note that in this case, Y doesn’t
usually have a pre-existing metric. Instead the choice of a section ι
of the metric bundle induces a metric on Y in the portion of Y that
lies above U ⊂ X.

The concept of the Observerse allows a more fundamental role for observation and measurement. 

Both of these issues have been at the heart of confusions in relativistic observation and Quantum Measurement and their as yet unsatisfactory treatment has lead some physicists to claim that paradoxes can only be solved with a quantized gravity on par with the other fields.

Our approach is different. By working with two spaces bridged by maps, we allow for the idea that not all fields are on par with each other and may need to be treated differently in the fully quantized theory.

To this end we will distinguish fields according to the following:

Definition 3.2 A field χ that originates as the section of a bundle over Xn or Y d will be called NATIVE to Xn or Y d respectively. Fields on X of the form ι

(χ) will be called INVASIVE to X if they are pulled back from
fields or jet bundles χ that are native to Y .

It is our contention in this investigation that physics may actually be happening
mostly on Y
d but that it is widely interpreted by physicists via metric pull-back
as if it were occurring natively on Xn leading to confusion. In fact, in this
investigation, there will only be one independent field that is truly native to
Xd


This allows for the possibility that in a complete theory one could treat the observing field on X differently from the more readily quantized fields on Y without immediately leading to paradox. Different observations via different
sections ι would pull back different quantized values from Y onto X.


## 3.1 Proto-Riemannian Geometry

The bundle of point-wise metrics has some curious elementary properties.

There is a tension between the fact that the bundle is filled with metric information by construction, but erected without reference to any metric in particular. Thus it is chimeric in that it is in tension between both its topological and geometrical natures. 

One way of noting this intermediate state is to notice that true geometries of both Riemannian and Symplectic type induce isomorphisms between the tangent and cotangent bundles.

In the presence of either a metric or symplectic form on a vector space W, we
inherit a pair of canonical vector-space isomorphisms that are not canonically
determined in the absence of this geometric structure:

<!-- W −→ W∗ W∗ −→ W (3.2) -->

leading to two exact sequences:

<!-- 0  T  T
∗  0 (3.3) -->

which, while rather trivial, suggest generalization in our case.

For the Einsteinian Observerse and its Tangent and Co-Tangent bundles

<!-- T Y, T ∗Y we likewise have natural and non-trivial maps:
T(Y ) −→ T
∗
(Y ) T
∗
(Y ) −→ T(Y ) (3.4) -->

However, neither of these maps is an isomorphism as they have non-trivial kernels. These can be fit into a repeating long exact sequences 

<!-- . . . −→ T −→ T
∗ −→ T −→ T
∗ −→ . . . (3.5) -->

evidencing the relationship of a metric Chimeric bundle C(Y ) = C

<!-- ∗
(Y ) to the
partial isomorphisms between T(Y ) and T
∗
(Y ) as we shall now explain.
There exists a commutative diagram
0 0 0 0
↓ ↑ ↓ ↑
. . . −→ V V ∗ −→ V V ∗ −→ . . .
↓ ↑ ↓ ↑
. . . −→ T −→ T
∗ −→ T −→ T
∗ −→ . . .
↓ ↑ ↓ ↑
. . . H −→ H∗ H −→ H∗
. . .
↓ ↑ ↓ ↑
0 0 0 0
(3.6) -->


where all vertical sequences are short exact and the repeating central horizontal
sequence is long exact with all other maps not covered in the preceding are
metric isomorphisms.

The bundle H∗ is defined to be

<!-- H∗ = π
∗
(T
∗
(X)) H∗
,→ T
∗
(Y ) (3.7) -->

which at the point g ∈ Y carries an induced metric g via Hπ∗(π∗(g)) as the pull
back of the push-forward metric. We will refer to the dual bundle (H∗) simply as H.

Conversely, as a fiber bundle, the total space Y carries a vertical sub-bundle
V ⊂ T(Y ) as the subspace of vectors pointing along the fibers of Y over X.

Here again, the structure of Y as a space of metrics becomes germane.
18
At a point y ∈ Y , lying in the fiber π
−1
(π(y)) let two symmetric two tensors

<!-- A, B ∈ T
V
y -->

(X) represent a random choice of two elements in the vertical tangent
space along two different smooth paths of non-degenerate metrics gA(t), gB(t)
where at time t = 0 we have gA(0) = gB(0) = y with ˙gA(t) = A and ˙gB(t) = B.
Then, by the symmetry of the metrics, the Frobenius inner product is defined
by the double contraction against the metric represented by the point y which,
in an orthonormal basis would look like:

< A, B >y= Try(A
T
· B) = Try(A · B) (3.8)

were the tensors A, B represented as matrices in that basis. Here the space of
metrics breaks into a Trace and Traceless component. The Traceless component
has signature 

<!-- (i·n−i
2
,
n
2+2i
2−2i·n+n−2
2
)  -->

with a freedom to assign either a (0,1) or (1,0) signature to the trace component. In this exposition we choose the later
so as to assume our Frobenius metric can be taken to be of signature

<!-- (i · n − i
2 + 1,
n
2 + 2i
2 − 2i · n + n − 2
2
) = (4, 6) for i = 1, n = 4 (3.9) -->

for the 4 dimensional (1, 3) metric of greatest physical interest with one temporal and three spatial dimensions. Naturally, this would work equally well for a cosmetic shift to the (3, 1) sector, but we are treating the 3-spatial and 1-temporal dimension as anthropically determined in either case and would imagine that the other sectors carry physical reality disconnected from our sector.

