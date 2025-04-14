---
heading: Section 20
title: "The Gauge Contribution"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 40
---


## The Gauge Contribution

Next up is the contribution:

<!--  12 Tr log
μ⌫
gauge =
gauge , where
ghost
μ⌫
+ 2i[F̄ μ⌫ , ·] -->

We see that part of the calculation involves ghost , and so is gives the same answer as above. 

The only difference is the spin indices μ⌫ which give an extra factor of 4 after taking the trace. This means that

<!-- Tr log
gauge = 4Tr log
ghost + F̄μ⌫ terms -->

On rotational grounds, there is no term linear in F̄μ⌫ . This means that the first term comes from expanding out log gauge to quadratic order and focussing on the F̄μ⌫ terms, 

<!-- F̄μ⌫ terms =
=
1
(2i)2 Tr ( @ 2 ) 1 [F̄μ⌫ , [( @ 2 ) 1 F̄ μ⌫ , ·]]
2Z
Z
4(k ⇢ μ
1
d4 k
d4 p
tr
[
Ā
(k)
Ā
(
k)]
adj
μ
⌫
2
(2⇡)4
(2⇡)4
k μ⇢ )(k ⇢⌫
p2 (p + k)2
k⇢ ⌫ )) -->
Once again, we have a divergent integral to compute. This time we get

<!-- ✓ 2 ◆
Z
⇥
⇤ μ ⌫
8C(adj)
d4 k
⇤U V
2 μ⌫
F̄μ⌫ terms =
tr Āμ (k)Ā⌫ ( k) (k k
k
) log
2
4
(4⇡)
(2⇡)
k2 -->

The sum then gives the contribution to the effective action,

<!-- Z
⇥
⇤
1
1 4
C(adj)
d4 k
Tr log gauge =
8
tr Āμ (k)Ā⌫ ( k) (k μ k ⌫
2
4
2
2 3
(4⇡)
(2⇡)
k
2 μ⌫
) log
✓
⇤2U V
k2 -->

Here the 4/3 is the diagmagnetic contribution. In fact, it’s overkill since it neglects the gauge redundancy.

This is subtracted by including the contribution from the ghost fields. 

Together, these give rise to a positive beta function. In contrast, the 8 term is the paramagnetic piece, and can be traced to the spin 1 nature of the gauge field. 

This is where the overall minus sign comes from.

The coefficient of the kinetic terms is precisely the gauge coupling 1/g 2 . Combining both gauge and ghost contributions, and identifying the momentum k of the background field as the relevant scale μ, we have

<!-- ✓
◆
✓ 2 ◆
1
1
C(adj)
1 1 4
⇤U V
= 2+
+
8 log
2
2
g (μ)
g
(4⇡)
3 2 3
μ2
✓ 2 ◆
1
11 C(adj)
⇤U V
= 2
log
2
g
3 (4⇡)
μ2 -->

This is in agreement with the advertised result (2.58). 

As explained previously, the overall minus sign here is important. Indeed, it was worth a Nobel prize.

