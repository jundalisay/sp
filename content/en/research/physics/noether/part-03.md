---
title: "Invariant variational problems"
weight: 7
description: "Modern works about Physics"
image: "/covers/noether.jpg"
---


One now deals with the two theorems in what follows:

I. If the integral I is invariant under a Gρ then there will be ρ linearly independent couplings of the Lagrangian expressions with divergences; conversely, the invariance of I under a Gρ follows from the latter. The theorem is also true in the limiting case of infinitely many parameters.

II. If the integral I is invariant under a G∞ρ , in which the arbitrary functions appear up to their σ th derivatives then there exist r identity relations between the Lagrangian expressions and their derivatives up to σ th order; the converse is also true here 1). 

The statement of both theorems is true for the mixed groups, so dependent, as well as independent divergence relations will appear.

If one goes from these identities to the associated variational problem – so one sets ψ = 0 2) – then in the one-dimensional case, for which the divergence goes to a total differential, Theorem I expresses the existence of ρ first integrals, between which, nonlinear dependencies can generally exist 3); in the multi-dimensional case, one obtains divergence equations that are often referred to recently as “conservation theorems”.

Theorem II expresses the idea that ρ of the Lagrangian equations are consequences of the remaining ones.

The simplest example of Theorem II – without the converse – is defined by the Weierstrass parametric representation. For it, the integral is known to be invariant due to its homogeneity of first order when one replaces the independent variable x by an arbitrary function of x that leaves u unchanged (y = p(x); vi(y) = ui(x)). 

Thus, an arbitrary function enters in, but without any of its derivatives, and this corresponds to the well-known linear relation between the Lagrangian expressions themselves: ∑ψ i i = 0. 

The “general theory of relativity” of the physicists will serve as a further example. Here, one deals with the group of all transformations of the x: yi = pi(x), while the u (which are

<!-- 1
)
)
3
)
2 -->

With certain trivial exceptions; cf., § 2, remark 2. Somewhat more generally, one can also set ψi = Ti ; cf., § 3, first remark. Cf., the conclusion of 

denoted by gμν and q) will be subjected to transformations that are induced by the coefficients of a quadratic and linear differential form that includes the first derivatives of the arbitrary functions p(x). They correspond to the well-known n dependencies between the Lagrangian expressions and their first derivatives 1).

In particular, if one specializes the group by saying that one allows no derivatives of the u(x) in the transformations, and, in addition, the transformed independent quantities may depend upon only the x, but not the u, then that the relative invariance 2) of ∑ψi δui follows (as will be shown in § 5) from the invariance of I, and likewise for the divergences that appear in Theorem I, as long as the parameters are subjected to certain transformations. From this, it follows that the aforementioned first integrals also admit the group. For Theorem II, one likewise deduces the relative invariance of the left-hand sides of the dependencies that are composed by means of arbitrary functions, and as a consequence of this, one has a function whose divergence vanishes identically and admits the group that mediates the connection between dependencies and the energy theorem in the relativity theory of the physicists 3).

Theorem II ultimately gives a group-theoretic proof of an assertion of Hilbert that is connected with this concerning the breakdown of the proper energy theorems for “general relativity.” With these extra remarks, Theorem I
includes all of the known theorems on first integrals in mechanics, etc., while Theorem II
can be regarded as the greatest possible group-theoretic generalization of “general
relativity theory.”

§ 2. Divergence relations and dependencies.

Let G be a finite or infinite group; one may then always arrange that the identity transformation corresponds to the value zero for the parameter s (the arbitrary functions p(x), resp.) 4). The most general transformation then takes the form:

<!-- yi
∂u


= Ai  x, u, ,⋯  = xi + ∆xi + ...
∂x


∂u


vi(y) = Bi  x, u, ,⋯  = ui + ∆ui + ...,
∂x

 -->

where ∆xi , ∆ui mean the terms of lower dimension in ε (p(x), resp.) and its derivatives; they shall be assumed to be linear in them. As we will show later, this is no loss of generality.

Now, let the integral I be an invariant under G, so relation (1) is fulfilled. In particular, I is then also invariant under the infinitesimal transformation:

Cf., perhaps, Klein’s presentation. I. e, ∑ψi δui takes on a factor under transformation.

Cf., Klein’s second note.

Cf., perhaps, Lie: “Grundlagen,” pp. 331. If one is dealing with an arbitrary function then the special values aσ of the parameter must be replaced with fixed functions pσ, ∂pσ/∂x, ..., and correspondingly the values aσ + ε must be replaced with pσ + p(x), ∂pσ/∂x + ∂p/∂x, etc.

<!-- yi = xi + ∆xi,
6
vi(y) = ui + ∆ui -->

that is included in G, and under it relation (1) goes to:

<!-- (7)
∂u


∂v


0 = ∆I = ∫ ⋯ ∫ f  y , v( y ), , ⋯  dy − ∫ ⋯ ∫ f  x, u ( x), ,⋯  dx ,
∂x
∂y



 -->

where the first integral is taken over the x+∆x-domain that corresponds to the x-domain. However, this integration can be converted into an integration over the x-domain by means of the conversion that is true for infinitesimal ∆x:

<!-- (8)

∂v


∂v

∫ ⋯ ∫ f  y, v( y), ∂y ,⋯ dy = ∫ ⋯ ∫ f  x, v( x), ∂x ,⋯  dx + ∫ ⋯ ∫ Div( f ⋅ ∆x) ⋅ dx . -->

If one then introduces the variation:

<!-- δ ui = vi(x) – ui(x) = ∆ui − ∑
(9)
∂ui
∆xλ
∂xλ -->


in place of the infinitesimal transformation ∆x then (7) and (8) go to:

0 = ∫ ⋯ ∫ {δ f + Div( f ⋅ ∆x )}dx .
(10)

The right-hand side is the well-known formula for the simultaneous variation of the dependent and independent variables. Since the relation (10) is fulfilled under integration over an arbitrary domain, the integrand must vanish identically; Lie’s differential equations for the invariance of I then go to the relation:

<!-- δ f + Div(f ⋅ ∆x) = 0.
(11) -->

If one expresses δ f from (3) in this using the Lagrangian expressions then one gets:

<!-- (12)
∑ψ δ u = Div B
i
i
(B = A – f ⋅ ∆x), -->

and this relation thus represents an identity for any invariant integral I in all of the arguments that appear; this is the desired form for Lie’s differential equations for I 1). ) (12) goes to 0 = 0 for the trivial case when Div(f ⋅ ∆x) = 0, δu = 0 – which can come about only when ∆x, ∆u also depend upon the derivatives of u; these infinitesimal transformations are therefore always separate from the group, and only the number of the remaining parameters or arbitrary functions are to be counted in the formulation of the theorems. Whether or not the remaining infinitesimal transformations still define a group must remain undecided. 1Noether – Invariant variational problems


Now let G be assumed to be a finite, continuous group, to begin with. Since, by assumption, ∆u and ∆x are linear in the parameters ε1, ..., ερ , from (9), the same thing is true for δ u and its derivatives; therefore, A and B are linear in the ε. I therefore set: 

B = B(1) ε1 + ... + B(ρ) ερ ,
δ u = δ u (1)ε1 + ⋯ + δ u ( ρ )ε ρ ,

where the δ u (1) , ... are thus functions of x, u, ∂u / ∂x, ..., so the desired divergence

relations follow from (12):

<!-- ∑ψ δ u
(13)
i
(1)
i
= Div B(1), ..., ∑ψ iδ ui( ρ ) = Div B(ρ). -->

