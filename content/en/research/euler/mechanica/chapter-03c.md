---
heading: Chapter 3c
title: "THE RECTILINEAR MOTION OF A FREE POINT ACTED ON BY ABSOLUTE FORCES"
date: 2025-03-20
weight: 4
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
c: "darkgoldenrod"
---



PROPOSITION 36. PROBLEM

290. To determine the times of descent through the distance AC to the centre of the force C (Fig. 28),if the centripetal force is proportional to the reciprocal of the distances +1 , with the number m denoting a
considered, and the exponent of this distance is 22m
m −1
whole positive number. [p. 117]

SOLUTION.

With a, f, y, and v retaining the same values as above, then let n = −22mm−−11 .Concerning
a n +1 − y n +1
which, [on substituting into v =
( n +1) f n
from (264)]
⎛
2
⎞
2 m −1 ⎟
2
2 m +1 ⎜
a 2 m −1 − y
v = 2m −1 f 2 m −1 ⎜
⎟
2
2
⎜ 2 m2−1 2 m −1 ⎟
y
⎝ a
⎠
and thus the time taken is given by :
∫
dy
=
v
2
2a 2 m−1
( 2m−1) f
2 m+1
2 m−1
.
1
∫ ⎛
y 2 m−1 dy
⎜a
⎝
2
2 m −1
−y
2
2 m−1
⎞
⎟
⎠
,
from which with y = 0 put in place the integral vanishes, as required. From which
product, if y = a is put in place, then the time sought for the whole descent through AC
2
2
1
is produced. Put y 2 m −1 = z and a 2 m −1 = b, then y 2 m −1 = z and dy = 2m2−1 z
2m −3
2 dz , from
which on substitution, the integral becomes
( 2 m −1) a
∫ dyv =
In order to evaluate
2f
2
2 m−1
2 m +1
2 m −1
. ∫ z (b−dzz ) .
m −1
∫ z (b−dzz ) , put b – z = u , then z = b – u and dz = -2udu and thus
m −1
2
2
z m −1dz = −2du (b − u 2 ) m −1 = −2du (b m −1 − ( m −1) b m − 2u 2 + ( m −1)( m − 2) b m −3u 4 − etc.) , the
1
1.2
(b − z )
integral of which is
( m −1)
C − 2u (b m −1 − 1.3 b m − 2u 2 +
( m −1)( m − 2) m −3 4
b
u − etc.) ,
1.2.5
which quantity must vanish when the factor y or z = 0, i. e. u2 = b, then the constant is
given by [p. 118]
:
C = 2b
m − 12
( m −1)
(1 − 1.3 +
( m −1)( m − 2)
− etc.) .
1.2.5


Moreover since the time for the whole descent arises when y = a or z = b, i. e. u = 0,
then only the constant quantity C remains for the value of the integral of z
with a restored in place of 2b
2a (1 −
m − 12
m −1
dz , which
(b − z )
is equal to :
( m −1) ( m −1)( m − 2) ( m −1)( m − 2)( m −3)
+
−
+ etc.) . Therefore the whole time of the descent
1.3
1.2.5
1.2.3.7
2m
2 m −1
through AC is equal to the product of a 2 m
f
2(2m − 1) f by this series
2 m −1
( m −1) ( m −1)( m − 2) ( m −1)(m − 2)(m −3)
1 − 1.3 +
−
+ etc. , the sum of which is made finite when the
1.2.5
1.2.5.7
amount m is a positive integer. Therefore in these cases the time can be shown by a finite
algebraic expression. Q. E. I.

Corollary 1.

291. Let m = 1, in which case n = - 3, and the series is equal to 1; therefore the time of
2
descent through AC arises equal to a 2
2f = a
f
f
2
2
, as has been found above (289).
f

Corollary 2.

292. Let m = 2, in which case n = −35 , and the value of the series is 23 , and the time of
4
3
6 f . But if m = 3, then n = −37 , the series is 32 . 54 ,
the whole descent is equal to 23 . a 4
3
f
and the time for the descent is 2.4a
3.5 f
6
5
6
5
8
7
n = −79 , and the time arises : 2.4.6a 8
7
3.5.7 f
10 f . [p. 119] In the same manner, if m = 4, then
14 f .

Corollary 3.

293. From these, the value of the sum of the general series is gathered to be equal
2.4.6...( 2m − 2)
to 3.5.7...(2m −1) . Therefore the time of descent in general is given by :
2.4.6...( 2m − 2) a
3.5.7...( 2m −1) f
2m
2 m −1
2m
2 m −1
2(2m − 1) f .
If indeed n = −22mm−−11 or m = 2nn−+11 , where m is a positive integer.

Corollary 4.

294. Therefore with the successive positive values 1, 2, 3, 4 etc. put in place for m, the following values of the series constitute a progression 1, 32 , 32..54 , 32..54..76 etc., in which it is conceded that circle quadrature can be shown from the intermediate term. For if m = 12 , the corresponding terminus [i. e. limit] is found to be π2 , with 1 : π denoting the ratio of the diameter to the circumference, if m = 32 , the corresponding terminus is 12 . π2 , and thus again if m denotes 52 , 72 , 92 etc. . these terms arise : 12..34..π2 , 12..34..56..π2 , 12..34..56..78..π2 etc.

[Note initially that since m is no longer a positive integer, the series for the descent
time does not end, and the finite product for the finite sum becomes an infinite product
for an infinite sum. The Wallis infinite product was well known to Euler, and the relevant
.... = π . We will digress a little and examine a
form can be written here as : 12..34..56..78..910
.11..
2
formula in E019 : 'De Progressionibus Transcentibus, seu quarum termini generales
algebraice dari nequeunt.', or Concerning transcendental progressions, or those for which
the general terms cannot be given algebraically, in which Euler sets out his ideas, most
of which relate to the beta functions B(m, n), which can be viewed as generalised
binomial coefficients turned into functions either of real or complex variables; a
translation of this paper has been given by Stacy G. Langton, which is available from the
Euler Archive. Later we will evaluate Euler's integrals using the properties of Beta and
Gamma functions, which indicate that there may be a discrepancy by a factor of 1⁄2 in
Euler's values.

In the above paper, Euler considers initially the following general infinite product,
from which the product for n = 12 above can be derived as a special case :
n
1− n
n
1− n
n
1− n
n
Π (n) = 11.+2n • 22 +.n3 • 33+.n4 • 44 +.n5 • etc., which he considers to be useful for interpolating
between integer values. There was no thought of convergence or divergence in these
days. Thus, on setting n = 12 , he finds that (and we include the working as it seems interesting) :
Π ( 12 ) = 1. 3 2 • 25. 3 • 37. 4 • 49. 5 • etc = 2 . 4 • 4 . 6 • 6 . 8 • 8. 10 • etc =
2
2
2
3.3
2
5.5
7.7
9.9
2 .4 6 8 10
1 • 2.4.6.8.10.... = π , on identifying with the Wallis product.
•
•
•
• etc =
2
3
5 7 9
2 3.5.7.9.11....
10.... = π , as required above. We will now examine Euler's integrals
Hence, 32..54..76..98..11
....
2
using the appropriate B(m, n) integrals. Thus, if we start with the above integral
∫ z (b−dzz ) , which can be written in the form ∫ b z (1−dzz / b ) , and on defining z' = z/b, we
m −1
m−1
have dz' = dz/b, and z m −1 = b m −1z 'm −1 hence the integral becomes
the integral
∫
∫
b
m− 1
2
z 'm−1 dz ' . Now,
(1− z ' )
∫ x (1− x ) dx is a beta function, which has the general form B(m, n)
−1
2
m −1
1
= x m−1 (1− x ) n−1 dx integrated between 0 and 1. In this case the integrals are thus B(m, 2 ).
1
1 1
Then, in the first instance, when m = 2 , the integral becomes B( 2 , 2 ). Beta functions
are evaluated from their associated Gamma functions, according to the definition :
B(m,n) =
Γ(m)Γ(n)
Γ(m + n)
2
Hence, B( 12 , 12 ) = Γ (1/ 2) = π . This does not agree with Euler's result, which is π/2.
Γ (1)
1
1
Similarly, when m = 32 , the value of the integral is B( 32 , 2 ), which is hence equal to
Γ (3 / 2), Γ (1 / 2)
=
Γ ( 2)
π /2 π
1
= 1 .π , which is Euler's first result. Again, when m =
2
5 , the integral
2
becomes Γ(5 / 2),Γ(1 / 2) = 3 π / 4 π = 3π = 1.3 π ; and if m = 72 , then the integral becomes
Γ (3)
2
8
2.4
Γ (7 / 2), Γ (1 / 2) 1.3.5 π / 8 π
=
= 1.3.5 π , etc. Thus, it appears that Euler's results differ by a factor
Γ ( 4)
3.21
2.4.6
1
of 2 consistently from what has been written down here by referring to a table of Gamma
functions and their properties. Perhaps he thought that his first integral gave the Wallis
result π/2 rather than π. Someone may feel inclined to do some more work on this issue,
(as there may be a mistake in the E019 paper). We will of course use Euler's values for
his integrals henceforth.]

Corollary 5.

295. Therefore the time of descent through AC is known in these cases also. For if m =
1 ,then in this case n = − ∝ , in which case the time is always indefinitely small. [p. 120]
2
Therefore let m = 23 , and n becomes equal to - 2, and the descent time is equal to
1.π .a
2.2. f
3
2
3
2
4 f = π .2a.f a , again as we have found (287). Let m = 52 , then n = −23 and theEULER'S MECHANICA VOL. 1.
Chapter Three (part b).
page 147
Translated and annotated by Ian Bruce.
5
4
1
.
3
..
.
a
π
descent time is equal to
5
2.4. f 4
. 2 f . And if m = 72 , then n = −34 and the descent time
7
6
is equal to 1.3.5.π .a7 . 3 f .
6
2.4.6. f

Corollary 6.

296. Generally therefore if m = 2k2+1 , in which case n = − kk−1 , and the descent time is
2 k +1
1.3.5.......( 2 k −1) π .a 2 k
equal to 2.4.6........2k . 2k +1 kf .
f 2k

