---
title: "Invariant variational problems"
weight: 5
description: "Modern works about Physics"
image: "/covers/noether.jpg"
---



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

