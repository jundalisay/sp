---
heading: Section 7
title: "Canonical Quantisation of Yang-Mills"
description: "Ultimately, we want to see how the ✓ term affects the quantisation of Yang-Mills"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 14
---


## 2.2.1 Canonical Quantisation of Yang-Mills

Ultimately, we want to see how the ✓ term affects the quantisation of Yang-Mills. 

But we can see the essence of the issue already in the classical theory where, as we will now show, the ✓ term results in a shift to the canonical momentum. The full Lagrangian is

<!-- L=
1
✓
tr F μ⌫ Fμ⌫ +
tr ?F μ⌫ Fμ⌫
2
2
2g
16⇡ -->

(2.25)

To start, we make use of the gauge redundancy to set

<!-- A0 = 0 -->

With this ansatz, the Lagrangian becomes


<!-- L=
1 ⇣ 2
tr Ȧ
g2
⌘
✓
B2 + 2 tr Ȧ · B
4⇡ -->


(2.26)

Here Bi = 12 ✏ijk Fjk is the non-Abelian magnetic field (sometimes called the chromomagnetic field). Meanwhile, the non-Abelian electric field is Ei = Ȧi . 

I’ve chosen not to use the electric field notation in (2.26) as the Ȧ terms highlight the canonical structure.

Note that the ✓ term is linear in time derivatives; this is reminiscent of the effect of a magnetic field in Newtonian particle mechanics and we will see some similarities below. 

The Lagrangian (2.26) is not quite equivalent to (2.25); it should be supplemented by the equation of motion for A0 . In analogy with electromagnetism, we refer to this
as Gauss’ law. It is 

<!-- Di E i = 0 -->


(2.27)

This is a constraint which should be imposed on all physical field configurations.

The momentum conjugate to A is


<!-- ⇡=
@L
1
✓
= 2E + 2B
g
8⇡
@ Ȧ -->

From this we can build the Hamiltonian

<!-- H=
1
tr E2 + B2
g2 -->


(2.28)

We see that, when written in terms of the electric field E, neither the constraint (2.27) nor the Hamiltonian (2.28) depend on ✓; all of the dependence is buried in the Poisson bracket structure.

When written in terms of the canonical momentum ⇡, the
constraint becomes

<!-- Di ⇡i = 0 -->

where the would-be extra term Di Bi = 0 by virtue of the Bianchi identity (2.10).

Meanwhile the Hamiltonian becomes

<!-- ✓
◆2
✓
1
2
H = g tr ⇡
B
+
tr B2
8⇡ 2
g2 -->

It is this ✓-dependent shift in the canonical momentum which affects the quantum theory.

