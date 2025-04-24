---
heading: Chapter 1d
title: "What is Speed?"
date: 2025-03-20
weight: 6
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
c: "darkgoldenrod"
---



## PROPOSITION 3. Theorem

33. In motion with any non-uniformity, the smallest elements of the distance are considered to be traversed by uniform motions.

Demonstration.

In geometry, curved lines are made up of small straight lines.

Similarly in mechanics, non-uniform motion is resolved into an infinite number of uniform motions.

For either the elements are actually traversed in a uniform motion, or with the change of the speed by an element of this kind is so small, that the increment or decrement can be ignored without error. 

In either case the truth of the proposition is therefore apparent. Q. E. D.


Corollary 1

34. Therefore all the change of the speed of the non-uniform motion is considered to occur upon entering the individual elements, since the whole elements are placed to be traversed with a uniform motion.


Corollary 2.

35. Whereby after the manner of the analysis of the very small to be observed, if the speed in the first element were c, the speed in the following element will be c + dc, in the third c + 2dc + ddc, and thus henceforth. [Thus, each new speed is the old speed plus the increment of the old speed.]


Scholium.

36. This corollary depends on the basis of the demonstration of the given force, that the change of the speed possible, while an infinitely small element is traversed, ought to be infinitely small and that this force should vanish at the start of the interval, with the body having attained its speed ; except for this to be the case, a finite motion would have to be generated immediately, which would be absurd. From which it is seen that the proposition is admitted not to be possible, nevertheless if the motion and the speed itself is infinitely small, in which case the momentary increase or decrease can have a finite ratio to that initial speed. But we will say more about that below, when the motion to be produced will examined.


## PROPOSITION 4. PROBLEM

37. A body moves with some kind of motion along the line AM (Fig. 1), with the speed of the body given at some point; it is necessary to determine the time in which the arc AM is completed.


SOLUTION

AM shall be the distance, either of the straight line or the curve equal to s, and the speed, that the body has at M shall be c, which will be some function of s.

The element Mm is taken from M, that has been considered to be traversed with the
uniform speed c [p.14]. With the element Mm to be called ds,
ds the time in which the element is traversed is equal to c (29).
Therefore by integration, the time is obtained in which the
ds
whole arc is completed, to equal ∫ c . To the integral a
constant of such a kind should be added, which restores this time to zero, when s = 0,
following the known rules of integration. Q. E. I.


EXAMPLE 1.

38. Let the speed at M now be described in terms of some power of the distance AM,
n then we have ds = s1− n . To which there is no need to add on a
;
∫ c 1− n
constant, if n < 1 or n has a negative value : for the time in which the arc AM is traversed
clearly c = s
s1−n
is itself given by 1− n [or, the constant of integration is zero]. But if the number 1 – n is
ds
negative, then there is given ∫ c =
To which the infinite quantity
−1 .
( n −1) s n−1
1
would have to be added for the time to go the
( n −1)0 n −1
distance AM. Therefore with the time in this case necessary to be infinite, for which the
body remains at A , nor in any finite time to progress from that place. Truly this shall be
the case, when n is a positive number greater than one. If truly n = 1, then the time cannot
ds
be shown by an algebraic expression ; for it comes about that ∫ c = ls, [i. e. log s ] to
that also it is necessary to add an infinite amount, for the time spent in passing along AM.
Corollary 1.


39. Therefore in the general case, bodies are unable to stop, except when the speeds of
the body, even from the beginning, are traversed as powers of the distance of an
exponent that is less than one.

Corollary 2.

40. The body is to progress along the straight line AM (Fig. 2),and the speed of the body at any point shall correspond to the line MN connected to the curve AN, which meets the straight line AM at A, thus, in order that the speed of the body at the beginning shall be zero. It is seen from the preceding, where the time to travel along AM is made finite, that it is necessary for the tangent AB at A to be perpendicular to AM. For with M coinciding with A, MN should be made equal to AM n and with the number n smaller than one, a fraction as it were, from which the normality of the tangent follows. [For a small increment AM, the tangent to the curve is approx. MN/AM = AM n −1 , and as n < 1, this quantity diverges; hence AB is perpendicular to AM]. For if the tangent AB makes an acute angle or an angle infinitely small with AM, then the time to pass along will be made infinite.


EXAMPLE 2

41. The body is to move along the straight
line AB (Fig. 3) thus, in such a manner
that, with the semi-circle ANB described
upon this line, the speed at any point M is
in proportion to the line MN attached to
the circle at this place. It is understood
that the speed at the point M is of such a
size that the body can traverse the distance
m.MN in one second. [i. e. the speed of the
body at M is proportional to the length
MN, where m is a constant of
proportionality for a particular motion, and which has the dimensions of inverse time.
Obviously, the speed is zero at A and B, while it is a maximum at C.] The radius of this
semi-circle is put as AC = a, now the distance traversed will be AM = s; and
MN = (2as − ss ) . [From elementary geometry, the length MN is the geometric mean of
the lengths AM or s, and MB or 2a – s.] Therefore the speed at M, that we have put
previously as c, in this case will be equal to
m (2as − ss ) . [p. 16] Therefore the time,
in which the distance AM is traveled
through, will be equal to
∫
∫
ds
∫ ( 2as −ss ) specifies the arc AN of the
1
ds
= ma
m ( 2 as − ss )
ads
.
( 2 as − ss ) But
circle. [For according to Fig. 3'. due to the
translator, the angle dθ is the increment in the arc length/radius, and sin θ = MN/a =
ds/NN', where NN' is an increment of the order of ds.] In accordance with this, the time in
which the body travels through the distance AM will be AN seconds. Thus the time, in
m. AC
sec. 

Since ANB = 22
which the body moves from A to B will be mANB
. AC
AC
7
22
approximately, the time will therefore be equal to
seconds. From which it is
7.m
understood, that whatever the size of the line AB, that it is always traversed in the same
time. [Thus, we have the rudiments of simple harmonic motion, for which the period is
independent of the amplitude, set out in this way; also, the constant m for a particular
motion is seen to be the angular velocity ω.]EULER'S MECHANICA VOL. 1.
Chapter one.



Corollary 3

42. It appears from the solution of the problem that the body arrives at A from M in the
same time (Fig. 1), from the backwards motion from M to A, but only if the motion has
the same speeds at the same locations.

Corollary 4.

43. The applied line MN [that is, the y co-
ordinate of a point on the curve for n > 1] of the
curve AN represent the speed (Fig. 4), which
the motion of the body has at the individual
point M on the line AM, and moreover the
curve has an angle less than a right angle at A
with the straight line AM.

From these
arguments put in place already, the time has
now been shown, in which the body arrives at
M from A, to be of an infinite size. Whereby
also with a retrograde motion of the body from
M towards A , the length of time afterwards is finally infinite, i. e. the body never reaches
A, even though at all points other than A the body has a finite speed.


