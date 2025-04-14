---
title: "Invariant variational problems"
weight: 3
description: "Modern works about Physics"
image: "/covers/noether.jpg"
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

Correspondingly, one understands an infinite continuous group G∞ρ to mean a group whose most general transformations depend analytically upon ρ essential, arbitrary functions p(x) and their derivatives, or at least, one that are continuous and
continuously differentiable finitely often. As an intermediate step between the two, one
finds the groups that depend upon infinitely many parameters, but not on arbitrary
functions. Finally, one refers to the mixed groups as the ones that depend upon arbitrary
functions, as well as parameters 1).

Let x1, ..., xn be independent variables, and let u1(x), ..., uμ(x) be functions that depend upon them. If one subjects the x and u to the transformations of a group then, due to the assumed invertibility of the transformations, among the transformed quantities, there must again be found precisely n independent ones: y1, ..., yn ; 

Let the remaining ones that are independent of them be denoted by v1(y), ..., vμ(y). The derivatives of the u with
respect to the x – viz., ∂u / ∂x, ∂2u / ∂x2, ... − can also enter into the transformations 2). A
function is called an invariant of the group when there exists a relation:

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


