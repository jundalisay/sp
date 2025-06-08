---
heading: "Section 5"
title: "Invariance of the individual components of the relations."
weight: 24
author: Noether
description: "We shall deal with variational problems that admit a continuous group (in the Lie sense)"
c: "firebrick"
---



If one specializes the group G to the simplest case that is ordinarily considered by specifying that one allows no derivatives of the u in the transformations and that the transformed independent variables depend upon only the x, but not the u then one can deduce the invariance of the individual components in the formulas.

First of all, this yields, from known reasons, the invariance of ∫...∫ (∑ψi δui) dx; thus, one infers the relative invariance of ∑ψi δui 1), where we understand δ to mean any variation. In fact, one has, on the one hand:

<!-- δI = ∫ ⋯ ∫ δ f  x, u ,
∂u
∂v

,...  dx = ∫ ⋯ ∫ δ f  y, v, ,...  dy ,
∂x
∂y



∂u -->

, ... that vanish on the boundary, due to the linear,
∂x
∂v
∂u
homogeneous nature of the transformation of the δu, δ
, ..., the δv, δ
, ... also
∂x
∂y
vanish on the boundary, so one has, correspondingly:
and, on the other hand, for δu, δ

<!-- ∂u


∫ ⋯ ∫ δ f  x, u, ∂x ,...  dx = ∫ ⋯ ∫ ( ∑ψ (u,...) δ u ) dx ,
i
∂v

i

∫ ⋯ ∫ δ f  y, v, ∂y ,...  dy = ∫ ⋯ ∫ ( ∑ψ (v,...) δ v ) dy ,
i -->

and it follows that for δu, δ

i
∂u

that vanish on the boundary:

<!-- ∂x
∫ ⋯ ∫ ( ∑ψ (u,...) δ u ) dx = ∫ ⋯ ∫ ( ∑ψ (v,...) δ v ) dy
i
i
= ∫ ⋯ ∫ ( ∑ψ i (v,...) δ vi )
i
i
∂yi
dx .
∂xn -->

If one expresses y, v, δv in the third integral in terms of x, u, δu and one sets it equal to
the first one then one has a relation:

<!-- ∆wσ =
1 
∂K ∗ μν 
μσ
τ
2g
K
p
−
p  , ∆gμν = pμν + ∑ gσμν ∆wσ
∑
μτ
∗ 
K 
∂gσμν
 -->

are infinitesimal transformations that I* admits. These infinitesimal transformations thus depend upon the
first and second derivatives of the gμν, and include the arbitrary p up to the first derivatives.
1
) I.e., under transformation, ∑ψi δui takes on a factor, which is always referred to as relative
invariance in the algebraic theory of invariants.Noether – Invariant variational problems
15
∫ ⋯ ∫ ( ∑ χ (u,...) δ u ) dx = 0
i
i
for a du that vanishes on the boundary, but is otherwise arbitrary, and, as is known, the
vanishing of the integrands for arbitrary δu follows from this; one thus has the following
relation identically in δu:
∂yi
(∑ ψi (v, ...) δvi ),
∑ ψi (u, ...) δui =
∂xκ
which expresses the relative invariance of ∑ ψi δui , and consequently, the invariance of
∫...∫ (∑ ψi δui) 1).
In order to apply this to the derived divergence relations and the dependencies, one
must first confirm that the δ u that is derived from the ∆u, ∆x actually satisfies the
transformation laws for the variation δu, as long as only the parameter (arbitrary
functions, resp.) in δ v are determined in a way that corresponds to the way that they are
determined for the similar group of infinitesimal transformations in y, v. Let Tq denote
the transformation that takes x, u to y, v; since Tq is an infinitesimal in x, u, the one that is
similar to it in y, v is given by T = TqTp Tq−1 , where the parameters (arbitrary functions r,
resp.) are therefore determined from p and q. One expresses this in formulas as:
Tp :ξ = x + ∆x(x, p),u* = u + ∆u(x, u, p),
Tq :y = A(x, q),v = B(x, u, q),
TqTp : η = A(x + ∆x(x, p), q),
v* = B(x + ∆x(p), u + ∆u(p), q).
From this, one has, however, Tr = TqTp Tq−1 , so:
1
)

∂v
∂y

This conclusion breaks down when y also depends upon the u, since then δ f  y ,v , ,...  also


∂f
includes terms like ∑ δ y , so the divergence conversion does not lead to the Lagrangian expressions, just
∂y
as when one allows derivatives of the u; then, in fact, the δv will lead to linear combinations of δu, δ
∂u
,
∂x
..., so after a further divergence conversion this will lead to an identity ∫...∫ (∑ χi (u, ...) δui ) dx = 0, such
that the Lagrangian expressions once again do not appear on the right-hand side.
The question of whether one can also already conclude the existence of divergence relations from the
invariance of ∫...∫ (∑ ψi δui ) dx is, from the converse, equivalent to the question of whether one can
conclude that from the invariance of I under a group that does not necessarily lead to the same ∆u, ∆x, but
still leads to the same δ u . In the special case of simple integrals and only first derivatives in f, one can
deduce the existence of first integrals from the invariance of the Lagrangian expressions for finite groups
(cf., e.g., Engel, Gött. Nachr. (1916), pp. 270.).Noether – Invariant variational problems
η = y + ∆y(r) = y + ∑
v* = v + ∆v(r) = v + ∑
16
∂A( x, q )
∆x(p),
∂x
∂B( x, u , q )
∂B( x, u , q )
∆x ( p ) + ∑
∆u ( p ) .
∂x
∂u
One replaces x = x + ∆x in this with ξ − ∆ξ, from which, x again goes to x, so ∆x
vanishes; thus, from the first formula in (20), η also again goes to y = η − ∆η. If ∆u(p)
goes to δ u ( p) then ∆v(r) also goes to δ v(r ) , and the second formula in (20) gives:
v + δ v ( y , v ,... , r ) = v + ∑
δ v ( y , v ,... , r ) = ∑
∂B( x, u , q )
δ u( p) ,
∂u
∂B
δ uκ ( x, u , p) ,
∂uκ
such that the transformation formulas for variations are, in fact, therefore fulfilled, as
long as δ v is assumed to depend only on the parameters (arbitrary functions r, resp.) 1).
In particular, the relative invariance of ∑ψ iδ ui then follows; thus, the relative
invariance of Div B also follows, since the divergence relations are also fulfilled in y, v,
and furthermore, from (14) and (13), one also has the relative invariance of Div Γ and
that of the left-hand side of the dependencies, when composed with the p(λ), where the
arbitrary p(x) (the parameters, resp.) are always replaced with the r in the transformation
formulas. This then yields the relative invariance of Div(B − Γ), and therefore that of a
divergence of a non-vanishing system of functions B – Γ whose divergence vanishes
identically.
From the relative invariance of Div B, one may, in the one-dimensional case and for
finite groups, draw a conclusion about the invariance of the first integrals. The parameter
transformation that corresponds to the infinitesimal transformation will, from (20), be
linear and homogeneous, and due to the invertibility of all transformations, the ε will also
be linear and homogeneous in the transformed parameters ε*. This invertibility certainly
remains preserved when one sets ψ = 0, since no derivatives of the u enter into (20). By
equating the coefficients of the ε* in:
Div B(x, u, ..., ε) =
1
dy
⋅ Div B(y, v, ..., ε*),
dx
) This again shows that y must be assumed to independent of u, etc., in order for the conclusion to be
valid. As an example, let us, perhaps, mention the δgμν and δqρ that were given by Klein, which satisfy the
transformations for variations, as long as p is subject to a vector transformation.Noether – Invariant variational problems
17
d (λ)
d (λ )
B (y, v, ...) will then be linear, homogeneous functions of the
B (x, u, ...),
dy
dx
d (λ )
d (λ )
such that from
B (x, u, ...) = 0 or B(λ)(x, u) = const. it also follows that:
B (y, v,
dx
dy
...) = 0 or B(λ)(y, v) = const. The first ρ integrals that correspond to a Gρ thus admit the
group in any case, such that the further integration is also simplified. The simplest
example of this is the one in which f is free of x or one u, which corresponds to the
du
transformation ∆x = ε, ∆u = 0 (∆x = 0, ∆u = ε, resp.). One has δ u = − ε
(ε, resp.), and
dx
since B can be derived from f and δ u by differentiation and rational couplings, it is then
also free of x (u, resp.) and admits the corresponding groups 1).
the
§ 6. An assertion of Hilbert.
From the foregoing, one ultimately finds the proof of an assertion of Hilbert about the
connection between the break-down of the proper energy theorem and “general
relativity” (Klein’s first note, Göttinger Nachr. (1917), answer, first passage), and indeed,
in a generalized group-theoretic context.
Let the integral I admit a G∞ρ , and let Gσ be any finite group that arises from
specializing the arbitrary functions, so it is a subgroup of G∞ρ . The infinite group G∞ρ
then corresponds to dependencies (16), and the finite one Gσ , to divergence relations
(13), and conversely, it follows from the existence of any sort of divergence relations that
I is invariant under a finite group that is identical to Gσ when and only when the δ u are
linear combinations of the ones obtained from Gσ . The invariance under Gσ can thus
lead to no divergence relations that differ from (13). However, since the invariance of I
under the infinitesimal transformations ∆u, ∆x of G∞ρ for arbitrary p(x) follows from the
validity of (16), it already follows from this, in particular, that it is invariant under the
infinitesimal transformations of Gσ that arise by specialization, and consequently, under
∑ψ δ u λ = Div B(λ) must then must then be
consequences of the dependencies (16), which can also be written: ∑ψ a λ = Div χ(λ),
Gσ .
The divergence relations
∗
i
( )
i
( )
i i

where the χ(λ) are linear couplings of the Lagrangian expressions and their derivatives.

Since the ψ enter into (13), as well as (16), linearly, the divergence relations must then be
linear combinations of the dependencies (16), in particular, and the B(λ) themselves are
) In the case where the existence of first integrals already follows from the invariance of ∫ (∑ ψi δui )
dx, they do not admit the complete group Gρ ; e.g., ∫ (u′′ δu) dx admits the infinitesimal transformation: ∆x
= ε2 , ∆u = ε1 + xε2 , while the first integral u − u′x = const., which corresponds to ∆x = 0, ∆u = xε3 , does
not admit the other two infinitesimal transformations, since it includes u, as well as x, explicitly. This first
integral corresponds simply to infinitesimal transformations of f that include derivatives. One then sees
that, in any case, the invariance of ∫...∫ (∑ ψi δui ) dx is achieved less often than the invariance of I, which
responds to a question that was posed in a previous remark.

thus composed linearly from the χ – i.e., from the Lagrangian expressions and their
derivatives, and from functions whose divergences vanish identically, like perhaps the B
– Γ that appeared in the conclusion to § 2, for which Div (B – Γ) = 0 and the divergence
likewise has the invariant property. I will refer to divergence relations for which B() of
the given kind can be composed from the Lagrangian expressions and their derivatives as
“unreal,” and all others as “real.”

Conversely, if the divergence relations are linear couplings of the dependencies (16) –
hence, “unreal” – then the invariance under Gσ follows from the invariance under G∞ρ ;
Gσ becomes a subgroup of G∞ρ . The divergence relations that correspond to a finite
group Gσ will then be unreal when and only when Gσ is a subgroup of an infinite group
that I is invariant under.

The original Hilbert assertion is obtained from this by specializing the group. Let the
term “translation group” mean the finite group:

<!-- yi = xi + εi ,
so
∆xi = εi,
∆ui = 0,
vi(y) = ui(x),
∂ui
ελ .
λ ∂xλ
δ ui = − ∑ -->

As is known, invariance under the translation group expresses the idea that the x do not

<!-- ∂u

 -->

enter into I = ∫ ⋯ ∫ f  x, u, ,...  dx explicitly. Let the associated n divergence

<!-- ∂x


 -->
relations:

<!-- ∂u
(λ = 1, 2, ..., n)
∑ψ i ∂x i = Div B(λ)
λ -->

be referred to as “energy relations,” since the “conservation law” Div B(λ) = 0 that corresponds to the variational problem corresponds to the “energy law,” while the B(λ) correspond to the “energy components.” One then has: If I admits the translation group then the energy relations become unreal when and only when I is invariant under an infinite group that includes the translation group as a subgroup 1).

An example of such an infinite group is given by the group of all transformations of the x, along with those induced transformations of the u(x) in which only derivatives of the arbitrary functions p(x) appear; the translation group then arises by specializing p(i)(x) = εi.

Therefore, it must remain undecided whether the most general of these groups is therefore already given – along with the groups that arise from altering I by a boundary integral. 

Induced transformations of the given sort arise perhaps when one subjects the u to the coefficient transformations of a “total differential form;” i.e., a form ∑ a dλxi + ∑ b dλ−1xi dxκ + ... that includes higher differentials, in addition to the dx. Special induced transformations for which the p(x) only appear in the first derivatives are given by the) The energy law in classical mechanics, and likewise in the older “relativity theory” (where ∑ dx2 goes to itself), are “unreal,” since no infinite groups appear there. 

1Noether – Invariant variational problems coefficient transformations of ordinary differential forms ∑ c dxi1 ... dxiλ , and ordinarily one has considered only these.

Another group of the given kind that cannot be a coefficient transformation, due to
the appearance of logarithmic terms, is perhaps the following one:

<!-- y = x+ p(x),
∆x = p(x),
vi = ui + ln(1 + p′(x)) = ui + ln
∆ui = p′(x)
1
),
dy
,
dx
δ ui = p′(x) − ui′ p( x ) . -->

Here, the dependencies (16) become:

<!-- dψ i 

∑ ψ u′ + dx  = 0,
i i
i -->


while the unreal energy relations become:

<!-- 
∑ ψ u′ +
i i
d (ψ i + const.) 
 = 0.
dx
 -->

The simplest invariant integral for the group is:

<!-- I= ∫
e −2 u1
dx .
u1′ − u2′ -->

The most general I is determined by integrating Lie’s differential equation (11):

<!-- δ f+
d
( f ⋅ ∆x ) = 0,
dx -->

which goes to:

<!--  ∂f

 ∂f 
∂f
∂f
p ( x) +  ∑
−
ui′ + f  p′( x ) + ∑
 p′′( x ) = 0
∂x
 ∂ui ∂ui′

 ∂ui′′ -->

(identically in p(x), p′(x), p′′(x)) by substituting the values of ∆x and δ u , as long as one assumes that f depends upon only first derivatives of the u. This system of equations already possesses solutions that actually include the derivatives for two functions u(x), namely:

<!-- 
e −u1 
f = (u1′ − u2′ )Φ  u1 − u2 ,
,
u1′ − u2′ 

1
)  -->

One computes the finite transformations from these infinitesimal ones backwards from the method
that was given in the conclusion of § 4. where Φ means an arbitrary function of the given arguments. 

Hilbert expressed his assertion in such a way that the break-down of the proper energy law was a characteristic feature of the “general theory of relativity.” In order for this assertion to be literally true, the term “general relativity” must then be further regarded as it usually is, and also extended to the previous groups that depend upon n
arbitrary functions 1).

With this, the validity is again confirmed of a remark of Klein that the usual terminology “relativity” in physics should be replaced with “invariance under a group.” (“Über die geometrischen Grundlagen der Lorentzgruppe,” Jber. d. deutsch. Math. Verein. 19 (1910), pp. 287; printed in Phys. Zeit.)