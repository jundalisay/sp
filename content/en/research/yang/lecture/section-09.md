---
heading: Section 9
title: "Is the Chern-Simons Functional Gauge Invariant?"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 18
---



Is the Chern-Simons Functional Gauge Invariant?

The Chern-Simons functional W [A] is not obviously gauge invariant. In fact, not only is it not obviously gauge invariant, it turns out that it’s not actually gauge invariant!

But, as we now explain, it fails to be gauge invariant in an interesting way.

Let’s see what happens. In A0 = 0 gauge, we can still act with time-independent gauge transformations ⌦(x) 2 G, under which A ! ⌦A⌦ 1 + i⌦r⌦ 1

The spatial components of the field strength then changes as Fij ! ⌦Fij ⌦ 1 . It is not difficult to check that the Chern-Simons functional (2.35) transforms as

<!-- ⇢
Z
1
1 ijk
3
W [A] ! W [A] + 2 d x i✏ijk @j tr (@i ⌦ ⌦ 1 Ak )
✏ tr (⌦ 1 @i ⌦ ⌦ 1 @j ⌦ ⌦ 1 @k ⌦)
4⇡
3 -->

The first term is a total derivative. It has an interesting role to play on manifolds with boundaries but will not concern us here. Instead, our interest lies in the second term. 

This is novel to non-Abelian gauge theories and has a beautiful interpretation.

To understand this interpretation, we need to understand something about the topology of non-Abelian gauge transformations. 

These gauge transformations fall into different classes.
We’ve already met the first classification of gauge transformations. 

Those with ⌦ 6= 1
at spatial infinity, S21 ⇠
= @R3 , are to be thought of as global symmetries. The remaining gauge symmetries have ⌦ = 1 on S21 . These are the ones that we are interested in
here.

Insisting that ⌦ ! 1 at S21 is equivalent to working on spatial S3 rather than R3 .

Each gauge transformation with this property then defines a map,
⌦(x) : S3 7! G

Such maps fall into disjoint classes. This arises because the gauge transformations can “wind” around the spatial S3 , in such a way that one gauge transformation cannot be continuously transformed into another. 

We’ll meet this kind of idea a lot throughout these lectures. Such maps are characterised by homotopy theory. In general, we will be interested in the different classes of maps from spheres Sn into some space X. 

Two maps are said to be homotopic if they can be continuously deformed into each other. The homotopically distinct maps are classified by the group ⇧n (X). For us, the relevant formula is

<!-- ⇧3 (G) = Z -->

for all simple, compact Lie groups G. In words, this means that the winding of gauge transformations is classified by an integer n. 

This statement is intuitive for G = SU (2)
since SU (2) ⇠ = S3 , so the homotopy group counts the winding of maps from S3 7! S3 .


For higher dimensional G, it turns out that it’s sufficient to pick an SU (2) subgroup of G and consider maps which wind within that. 

It turns out that these maps cannot be unwound within the larger G. 

Moreover, all topologically non-trivial maps within G can be deformed to lie within an SU (2) subgroup. It can be shown that this winding is computed by,

<!-- Z
1
n(⌦) =
d3 S ✏ijk tr (⌦ 1 @i ⌦ ⌦ 1 @j ⌦ ⌦ 1 @k ⌦) -->


(2.36)

We claim that this expression always spits out an integer n(⌦) 2 Z. This integer characterises the gauge transformation. It’s simple to check that n(⌦1 ⌦2 ) = n(⌦1 ) +
n(⌦2 ).

An Example: SU (2)

We won’t prove that the expression (2.36) is an integer which counts the winding.

We will, however, give a simple example which illustrates the basic idea. We pick gauge group G = SU (2). 

This is particularly straightforward because, as a manifold, 

SU (2) ⇠
= S3 and it seems eminently plausible that ⇧3 (S3 ) ⇠
= Z.

In this case, it is not difficult to give an explicit mapping which has winding number n. Consider the radially symmetric gauge transformation

<!-- ✓
◆
⇣! ⌘
⇣! ⌘
i
i x̂
i
⌦n (x) = exp i!(r)
= cos
+ i sin
· x̂i -->

(2.37)

where !(r) is some monotonic function such that

<!-- (
0
r=0
!(r) =
4⇡n
r=1
i -->

Note that whenever ! is a multiple of 4⇡ then ⌦ = e2⇡i i x̂ = 1. This means that as we move out radially from the origin, the gauge transformation (2.37) is equal to
the identity n times, starting at the origin and then on successive spheres S2 before it reaches the identity the final time at infinity S21. 

If we calculate the winding (2.36) of this map, we find n(⌦n ) = n

For more general non-Abelian gauge groups G, one can always embed the winding ⌦n (x) into an SU (2) subgroup. 

It turns out that it is not possible to unwind this
by moving in the larger G. 

Moreover, the converse also holds: given any non-trivial winding ⌦(x) in G, one can always deform ⌦(x) until it sits entirely within an SU (2) subgroup.
