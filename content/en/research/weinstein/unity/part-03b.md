---
heading: "Part 3.2"
title: "The Chimeric Bundle"
description: ""
c: "darkgoldenrod"
weight: 12
date: 2021-04-01
---


We now define two metric bundles which, with the above assignments, are canonically isomorphic:

<!-- C(Y ) = C = V ⊕ H∗ C
∗
(Y ) = C
∗ = V
∗ ⊕ H 
(3.10) -->


where each of these Chimeric bundles may be thought of as ‘semi-canonically’
equivalent to the Tangent and Co-Tangent bundles according to:

..

(3.11)

as one way of formally linking two short exact sequences.

These bundles C = C(Y ) and C
∗ are distinguished by the fact that they
are (semi-canonically) isomorphic to the tangent bundle in the case of C and 2NB: This choice is one of the few non-forced choices allowed in the strong form of GU.


the co-tangent bundle in the case of C
∗ and possess natural metrics. Because
the fibers at a point g ∈ Y impart metrics to to the vertical Vg and horizontal
sub-bundles H∗g , taking those sub-spaces to be orthogonal to each other allows
for two different choices of metric to be inherited by their direct sum according
to choices of sign.


## 3.3 Topological and Metric Spinors

What then is the purpose of defining bundles that are isomorphic to T and T but with only part of that isomorphism being canonical? 

The answer lies in the paradox of Spinors. While the Dirac operator may well carry topological information that is not metric, it is usually impossible to define a natural finite dimensional bundle of spinors on Xn in the absence of a metric, even when one can lift the General Linear group to its connected twofold double cover GL( f N, R), due to the absence of finite dimensional fractional spin representations.


By passing to Y d however, we can do somewhat better by virtue of the fact
that spinor representations carry an exponential property. That is, the spinor
functor converts direct sums of vector spaces as input into tensor products of
spinor representations as output:
/S(Wa ⊕ Wb) ∼= /S(Wa) ⊗ /S(Wb) (3.12)
At the bundle level, we apply this to the metric Chimeric Bundle at a point
g ∈ Y to obtain:

<!-- /Sg
(C) ∼= /Sg
(V ⊕ H∗
) ∼= /SFrobeniusg
(V ) ⊗ /Sg
(H∗
π∗(π∗(g))) (3.13) -->

which gives spinors defined for the metric endowed C = C
∗ without making a
choice of metric on Y .
This is important for several reasons. In the first place, we have defined a
Spin Bundle for the chimeric bundle C(Y ) which is semi-canonically isomorphic
to metric bundles of spinors on T Y . Thus at the cost of replacing X with the
total space of a natural bundle over it, we have come rather close to defining
spinors without a choice of metric via maps:

<!-- T Y
% &
0 −→ C ⊕ C
∗ −→ 0
& %
T
∗Y
(3.14) -->


More importantly, we must have in the back of our minds that we are ultimately
going to have to harmonize gravitation and the metric with fractional spin Fermi
fields which depend on that tensor for their existence. This construction allows
us to work with one single bundle of spinors even when there is no choice of
metric. When a metric is chosen below on X compatibly with V and H, the Chimeric bundle and Tangent are given a natural isomorphism via the LeviCivita connection

<!-- /S(V ) ⊗ /S(H)
| {z }
Topological Spinors
−→ /S(T) = /S(T
∗
)
| {z }
Metric Spinors
(3.15) -->

telling us how the Horizontal bundle H maps into T Y . This in turn clears
the way to allow us to later consider quantum Fermi fields which usually carry
metric bundle dependence between invocations of metric tensors.
3.4 Reversing The Fundamental Theorem: The Zorro Construction
According to the fundamental theorem of Riemannian Geometry, every Riemannian or (semi-Riemannian metric) induces a unique metric compatible torsion free Levi-Civita connection on its tangent bundle.

As we have two spaces, X, Y , this is equally true both above and below in
our construction of the Observerse:

<!-- Metrics Connections
On X ג − →ℵג
On Y g −→ Ag
(3.16) -->

However, what is necessary to split the cyclic long exact sequence of maps
between T and T is in fact a connection on the space Y viewed as a bundle
over X. By reversing the usual logic somewhat and linking these two maps, we
get a train of transmission where a metric choice below on X leads ultimately
to the choice of a connection above over Y :
Metrics Connections

<!-- On X ג − →ℵג
.
On Y gℵ −→ Ag
(3.17) -->

The importance of this is that each observation of Y via a choice of metric ג on X actually induces a metric and connection on Y identifying the Topological spinors with the metric spinors. This allows us somewhat more confidence to explore the idea that metrics are not even necessarily present on Y unless when observed where the act of observing under pull back ג

Further, if the problem with much of quantum gravity turns out to be the difficulty of quantizing metrics relative to other fields such as vector potentials, this excercise allows us to move to more conducive variables for those who harbor dreams of quantizing gravitation.

It should be pointed out here that most possible metric on Y are never in play. The subset of metrics that we are considering are incredibly tightly constrained and are equivalent to the space of connections that can arrise on X as Levi-Civita connections, as opposed to the space of all metrics over Y . Thus the issue of what upstairs gravity waves are possible doesn’t arise as the space of relevant fields is downstairs on X.
