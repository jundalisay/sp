---
heading: "Section 1"
title: "Invariant variational problems"
weight: 3
author: Noether
description: "We shall deal with variational problems that admit a continuous group (in the Lie sense)"
c: "firebrick"
---


<!-- Emmy Noether in Göttingen.
(Presented by F. Klein at the session on 26 July 1918 1) -->


We shall deal with variational problems that admit a continuous group (in the Lie sense).

The results that this yields for the associated differential equations find their most general expression in the theorems that are formulated in § 1 and are proved in the following paragraphs.

One can make more precise statements about these differential equations that arise from variational problems than one can about arbitrary differential equations that admit a group, which defines the context of Lie’s investigations. 

Thus, what follows rests upon a coupling of the methods of the formal calculus of variations with those of the theory of Lie groups. For special groups and variational problems, this coupling is not new; I mention Hamel and Herglotz for special finite groups, and Lorentz and his school (e.g., Fokker), Weyl, and Klein for special infinite groups 2). 

In particular, Klein’s second note and the present efforts were mutually influenced by each other, so I will refer to the concluding remarks of Klein’s note.


### § 1. Prefatory remarks and the formulation of the theorem.

All of the functions that enter into what follows shall be assumed to be analytic, or at least continuous and continuously differentiable finitely often, and single-valued in the domain in question.

As one knows, one understands the term “transformation group” to mean a system of transformations such that to every transformation included in the system there exists an inverse, and the composition of any two transformations of the systems again belongs to the system. The group is called a finite, continuous group Gρ when its transformations.

<!-- The final version of the manuscript was first submitted at the end of September. -->

<!-- ) Hamel: Math. Ann, Bd. 59 and Zeit. f. Math. u. Phys., Bd. 50. Herglotz: Ann. d. Phys. (4) Bd. 36,
esp. § 9, pp. 511. Fokker, Verslag d. Amsterdamer Akad., 27/1, 1917. For further literature, cf., the second
note of Klein: Göttinger Nachrichten, 19 July 1918.
In a recently-appearing paper of Kneser (Math. Zeit., Bd. 2), he treated the constructionof invariants by
similar methods.
2Noether – Invariant variational problems -->

<!-- are included in the most general group that depends analytically upon ρ essential
parameters s (i.e., the ρ parameters shall not be representable as ρ functions of fewer
parameters).  -->

Correspondingly, one understands an infinite continuous group G∞ρ to mean a group whose most general transformations depend analytically upon ρ essential, arbitrary functions p(x) and their derivatives, or at least, one that are continuous and continuously differentiable finitely often. 


As an intermediate step between the two, one finds the groups that depend upon infinitely many parameters, but not on arbitrary functions. Finally, one refers to the mixed groups as the ones that depend upon arbitrary functions, as well as parameters 1).

Let x1, ..., xn be independent variables, and let u1(x), ..., uμ(x) be functions that depend upon them. 

If one subjects the x and u to the transformations of a group then, due to the assumed invertibility of the transformations, among the transformed quantities, there must again be found precisely n independent ones: y1, ..., yn ; 

Let the remaining ones that are independent of them be denoted by v1(y), ..., vμ(y). The derivatives of the u with respect to the x – viz., ∂u / ∂x, ∂2u / ∂x2, ... − can also enter into the transformations 2). 

A function is called an invariant of the group when there exists a relation:

<!-- ∂u ∂ 2u
∂v ∂ 2 v
P  x , u , , 2 ,⋯  = P  y , v , , 2 ,⋯  .
∂x ∂x
∂y ∂y -->

In particular, an integral I becomes an invariant of the group when there exists a relation:
(1)

<!-- ∂u ∂ 2u
I = ∫ ⋯ ∫ f  x, u, , 2 ,⋯  dx
∂x ∂x


2


∂v ∂ v
= ∫ ⋯ ∫ f  y , v, , 2 ,⋯  dy
∂y ∂y -->

when one integrates over an arbitrary real x-domain and the corresponding y-domain 4).

<!-- “Grundlagen für die Theorie der unendlichen kontinuierlichen Transformationsgruppen” (Ber. d. K. Sächs. Ges. der Wiss. 1891) [cited as -->

In  “Grundlagen”, Lie defined the infinite, continuous groups to be transformation groups whose transformations are given by the most general solutions of a system of partial differential equations, as long as these solutions do not depend upon only a finite number of parameters. 

In this way, one thus obtains one of the aforementioned types that are different from the finite groups, while, conversely, the limiting case of infinitely many parameters does not necessarily need to satisfy a system of differential equations.


To the greatest extent possible, I will omit indices, as well as summations; hence, one might have
 
<!-- ∂2u / ∂x2 for ∂2uα / ∂xβ ∂xγ , etc. -->

To abbreviate, I write dx, dy for dx1, ..., dxn, dy1, ..., dyn .

All of the arguments x, u, ε, p(x) that enter into the transformations shall be assumed to be real, while the coefficients might be complex. However, since one deals with identities in the x, u parameters and arbitrary functions in the final results, they are also true for complex values, as long as all of the functions that appear in them are assumed to be analytic. 

A greater part of the results can be established without integrals, moreover, such that the restriction to the reals is not necessary for the proof here either. On the other hand, the considerations at the conclusion of § 2 and the beginning of § 5 do not seem to be practicable without integrals.



On the other hand, I define the first variation δI for an arbitrary – not necessarily invariant – integral I.

I convert it according to the rules of the calculus of variations by partial integration. 

As long as one assumes that δu, along with all of the derivatives that appear, vanish at the boundary, but are otherwise arbitrary, it becomes:

<!-- δI = ∫ ⋯ ∫ δ f dx = ∫ ⋯ ∫  ∑ψ i  x, u,
(2)

∂u


,⋯  δ ui  dx ,
∂x -->

where ψ means the Lagrangian expressions; i.e., the left-hand sides of the Lagrange equations for the associated variational problem δI = 0.

These integral relations correspond to an integral-free identity in du and its derivatives, which arises when one writes down the boundary terms. As partial integration shows, these boundary terms are integrals over divergences – i.e., over expressions:

<!-- Div A =
∂A
∂A1
+⋯ + n ,
∂x1
∂xn -->

where A is linear in δu and its derivatives. One thus comes to:

<!-- ∑ ψi δui = δf + Div A.
(3) -->

In particular, if f contains only first derivatives of u then in the case of a simple integral
the identity (3) is identical with the one that Heun called the “central Lagrange equation”:

<!-- ∑ ψi δui = δf − d  ∑ ∂f δ ui 

(4)
dx 

∂ui′

dui 

 ui′ = dx  ,


while for a n-fold integral, (3) goes to:

∑ ψi δui = δf − ∂  ∑ ∂∂fu δ ui  − ... − ∂  ∑ ∂∂fu δ ui  .
∂x1  ∂ i
∂xn  ∂ i

∂x1
∂xn

(5)
For a simple integral and κ derivatives with respect to u, (3) is given by:
∑ ψi δui = δf −
(6)
−

 2  ∂f
 κ  ∂f
d   1 ∂f
(1)
(κ −1) 
∑    (1) δ ui +   (2) δ ui + ⋯ +   (κ ) δ ui   +
dx   1 ∂ui
 1  ∂ui
 1  ∂ui
 Noether – Invariant variational problems
+
4
 
 3  ∂f
 κ  ∂f
d 2    2  ∂f
δ ui +   (3) δ ui(1) + ⋯ +   (κ ) δ ui(κ − 2)   + ...
2 ∑   
(2)
dx    2  ∂ui
 2  ∂ui
 2  ∂ui
 
+ (−1)n

d κ   κ  ∂f
δ ui  ,
κ ∑  
(κ )
dx   κ  ∂ui
 -->

a corresponding identity is true for n-fold integrals; in particular, A includes δu up to its (k – 1)th derivative. The fact that the Lagrangian expressions ψi are, in fact, defined by (4), (5), (6) follows from the fact that all higher derivatives of the δu are eliminated by way of the combinations on the right-hand side, while, on the other hand, relation (2) is fulfilled, which leads to the partial integration uniquely.



