---
heading: "Section 2"
title: "Divergence relations and dependencies."
weight: 8
author: Noether
description: "We shall deal with variational problems that admit a continuous group (in the Lie sense)"
c: "firebrick"
---



Let G be a finite or infinite group.

We may then always arrange that the identity transformation corresponds to the value zero for the parameter s (the arbitrary functions p(x), resp.) 4). The most general transformation then takes the form:

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

