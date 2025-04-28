---
title: "Contingency, predictability in the evolution of a prokaryotic pangenome"
c: "darkslategray"
description: "Contingency, predictability in the evolution of a prokaryotic pangenome"

# date: 2022-04-30
weight: 4
---



### Significance

Different strains of the same prokaryotic species often show significant variation in gene content. 

We do not know whether this variation is due to:
- genetic drift
- selection
  - This expects sets of genes to be consistently and repeatedly gained or lost together, or sequentially.

We used machine learning to predict variable genes in a large set of Escherichia coli strains, using other variable genes as predictors.

Most genes are predictable. This suggests selection plays a role in their acquisition, loss, and maintenance. 

Some genes are consistently associated with the presence or absence of others.

These results have implications for understanding evolutionary dynamics in prokaryotic genomes.

### Abstract

Prokaryotic species:
- are maintained through horizontal gene transfer and gene loss. 
- have remarkable variable pangenomes

Repeated acquisitions of near-identical homologs can easily be observed across pangenomes. 

Do these parallel events have similar evolutionary trajectories, or do they end up quite differently because of the different genetic backgrounds of the postacquisition recipients?

In this study, we present a machine learning method that predicts the presence or absence of genes in the Escherichia coli pangenome based on complex patterns of the presence or absence of other accessory genes within a genome. 

Our analysis leverages the repeated transfer of genes through the E. coli pangenome to observe patterns of repeated evolution following similar events. 

The presence or absence of genes is highly predictable from other genes alone. This shows that selection:
- deterministically maintains gene–gene co-occurrence and avoidance relationships over long-term bacterial evolution 
- is robust to differences in host evolutionary history. 

The pangenome is a set of genes with relationships* that govern their likely cohabitants, analogous to an ecosystem’s set of interacting organisms.

{{< n n="We call this part of Cartesian Relationality. The ecosystem is the system in Poincare's Law of Relativity" >}}

Intragenomic gene fitness effects may be the key drivers of prokaryotic evolution.
- It influences the repeated emergence of complex gene–gene relationships across the pangenome.



### Horizontal gene transfer

Evolution by horizontal gene transfer (HGT) and differential loss causes remarkable variation in gene content in bacterial genomes, both within and between populations (1–5). 

Core genome - the genes that are present in all genomes in a collection

Accessory genes - the genes that are found only in some lineages

Pangenome - the union of core and accessory genes

Most gene transfers into a genome are done by horizontal gene transfer, mediated by plasmids, phage, and transformation. 

<!-- There has been some disagreement on the relative influences of random drift and natural selection on structuring pangenomes. -->

The presence or absence of specific genes (genetic background) can influence the presence or absence of others (6–8). 

Consequently, the content of prokaryotic genome:
- is an outcome of its history of vertical and horizontal gene transmission
- has emerged via a combination of internal (intragenomic) and external (ecological) fitness effects (9) in addition to stochastic, nonadaptive evolution (genetic drift).

It is also unclear how evolutionary responses to the acquisition of a gene by HGT, are sensitive, or robust, to differences in evolutionary history.


Evolutionary paths depend on unpredictable events.

Stephen J. Gould suggested that if we could replay history, it would not result in the same outcome each time. 

This view is too rigid. 

Parallel evolution experiments mimic replaying of history. These suggested that:
- historical contingency does have an effect
- some aspects of evolution are deterministic

Evolution is likely to happen each time we replay the tape (11–15). 

<!-- Until now, it has not been obvious how, or even if, the contingency-deterministic question relates to prokaryote genome evolution.  -->

In prokaryote pangenome evolution, repeated HGT can introduce homologs of the same gene family into divergent genomes that contain unique but overlapping sets of genes. 

The incorporation of these genes into different genetic backgrounds allows us to address the contingency-determinism question through retrospective analysis of the subsequent outcomes.

A deterministic outcome is when all, or most, recipient lineages evolve in similar ways after gene acquisition.

A non-deterministic outcome is that:
- prior events such as divergence in gene content of the recipient genomes, plays the more important role.
- postacquisition evolution of the different lineages would therefore be different.

A deterministic evolutionary trajectory is:
- the acquisition of a gene that in turn potentiates the acquisition, avoidance, retention, or loss of one or more other genes.
- evolutionary outcomes become highly likely due to the influence of intragenomic selection on genotypes. 

Repeated acquisition and loss of a gene is insufficient to imply deterministic evolution. 

Hallmarks of determinism would include:
- the emergence of repeated biases in gene content, including the selective recruitment of another gene, or
- selective loss of another gene, following horizontal transfer. 

Evolution is stochastic. It is unlikely that gene content evolution is entirely deterministic or entirely driven by contingency. Instead, it falls somewhere on the spectrum between both extremes. 

The question is which end of the spectrum is closest. 

Several thousand complete prokaryotic genomes are available, providing enough data to address the issue.

Therefore, we can ask whether a gene’s presence or absence in a genome is predictable, based solely on the gene content of the rest of a genome.

This would imply deterministic evolution. Alternatively, if gene presence or absence is not predictable, it is because its presence is either contingent on unaccounted differences in evolutionary history or is solely driven by genetic drift. 

<!-- We acknowledge that HGT and loss is not the only way that gene content can evolve in a pangenome. Other forms of mutation including single nucleotide substitutions are clearly influential in bacterial evolution (see ref. 16), and this may affect the ways in which genes co-occur or avoid each other. However, here we focus exclusively on gene gain, occurring usually through transfer, and loss. -->

<!-- Several software programs have been developed to find coevolving gene pairs and to infer coevolving modules (17–22). However, gene presence or absence in a genome may be influenced by a mix of positive and negative intragenomic effects beyond just pairwise correlations.  -->

To incorporate these more complex and subtle patterns, we used a Random Forest approach (23). 

Random Forests aggregate information from individual decision trees, which themselves summarise the conjunction of features not just pairwise comparisons, that lead to predictions of gene presence or absence.

A Random Forest approach can assess whether inferences are generalisable. 

<!-- The model that we use to predict gene presence or absence is parameterised on a training dataset and evaluated on a test dataset (24). 

If the model built using the training dataset does not describe the patterns found in the test set, it is probable that the pattern is an artefact of the training set, and the model should be considered inadequate.

However, if the model makes accurate predictions in the test set, it appears to describe general properties of the entire dataset. Finally, Random Forest models make predictions in a directed manner, where one gene might predict the presence or absence of another, meaning that we can say whether a gene is predictable, and if so, we can also identify its predictors. -->

A substantial proportion of Escherichia coli accessory genes can be predicted by the other genes present. 

E. coli has a large accessory genome (25, 26) and occupies a wide range of niches (27). 

The E. coli pangenome has evolved divergent gene content over time. A gene that is horizontally transferred from one E. coli to another will often find itself in a considerably different ensemble genetic background.

We have analysed the predictability of gene content evolution following the repeated transfer of genes into these diverse genetic backgrounds. This is a natural equivalent of what Blount, Lenski, and Losos called a “historical difference experiment” (11). 

We have typified the effects of accessory genes’ presence on the presence or absence of other genes into three categories typically used by macroecologists to describe interactions between species. McInerney defined mutualism as a situation where two or more genes benefit from the association (9).

Here, we define putative mutualism as two genes predicting the presence of one another and each gene similarly influencing the likelihood of the other’s occurrence. This could be due to a genuine beneficial relationship between the two genes.

However, they might also both benefit from a common factor, which doesn’t necessarily have to be another gene. 

Commensalism refers to the situation where one gene strongly depends on the presence of another, but the reverse dependence is much weaker or nonexistent. Competition is when two genes appear to avoid being in the same genome. 

Note that we are not attributing specific behaviours to genes; these categories merely serve to describe observed patterns.


<!-- ### Materials and Methods

E. coli genomes were downloaded from the National Center for Biotechnology Information (NCBI) genome database (28) using the NCBI command line utility “datasets” 12.17.2 accessed 01/05/2022. All annotated E. coli genomes were downloaded provided that they were of the highest completeness level (complete). 

If a genome had been assembled by both the GenBank and RefSeq methods, the GenBank (GCA) annotation was maintained; however, if only a RefSeq (GCF) annotation was in the database, this was retained. The final dataset consisted of 2,341 genomes. The full list of accession numbers is included in SI Appendix, Supplementary List 1.

Genomes were re-annotated with PROKKA version 1.14.6 (29), employing the “bacteria” annotation mode. We applied an E-value threshold of 10−9 and mandated a minimum query coverage of 80% for assigning functional annotations. 

The E. coli pangenome was inferred using Panaroo version 1.2.9 (30) with the mode set to sensitive. It was important to include rare genes, owing to the possibility that they would have important effects on the prediction of other genes.

The gene presence–absence matrix produced by Panaroo was processed so that genes present in more than 99%, or less than 1% of genomes were removed. The matrix was further modified by converting gene names to “1” and empty fields to “0” so that 1 represented presence and 0 represented absence. In addition, genomes with identical patterns of gene presence and absence were collapsed into the same vector.

 Genes with identical presence-absence patterns (PAPs) across our genome sample were also collapsed into gene family groups (SI Appendix, Table S1). Essentially, this meant that both the features and predicted variable in these analyses are PAPs rather than genes per se, most of which were represented by only one gene but some of which were represented by multiple genes. The list of genomes with nonunique gene repertoires is found in SI Appendix, Table S2.
To minimise the impact of phylogeny on understanding predictability, repeatability, and contingency, we impose the requirement that we only study genes whose distribution is not “clumped” on one or a few clades. A backbone phylogeny was inferred in order to evaluate the distribution of gene content across the tree. Alignments of universal single-copy genes were constructed using MAFFT version 7.490 (31). 

The resulting 337 gene alignments were concatenated to form a superalignment and a maximum likelihood phylogeny was reconstructed using IQTree 2.2.0 (32) with extended model selection (33) and 1,000 ultrafast bootstrap replicates (34). The tree was rooted at the midpoint. To assess the distribution of each gene on this tree, we calculated Fitz and Purvis’ D statistic (35), retaining only those predicted genes with a D statistic greater than zero, though source nodes could still have D < 0. To contextualise the meaning of the D statistic, we also calculated the parsimony score for each gene using PAUP v4.0a (36). This metric represents the minimum number of times a gene has shifted from present to absent or absent to present along the phylogeny. Filtration of the edges was carried out using Sqlite3 (37). In practice, we only study genes that have changed character state from present to absent or vice versa on the tree at least 8 times and where D is >0.

A model of gene presence or absence was inferred using Random Forests. Prediction models for each PAP were calculated separately, meaning that the number of times that our Random Forests were trained was equal to the number of PAPs in the processed matrix. For each PAP being predicted, the genomes were randomly split into a training set, equal to 75% of the genomes and a test set of the remaining 25%. 

These sets were stratified by the gene presence–absence state being predicted, meaning that the proportions of genomes with any given gene being present or absent remained approximately the same in the training and the test datasets. These test and training datasets were assigned independently during the prediction of every PAP in every analysis. Decision trees were then generated by taking a random sample of genes with size equal to the square root of the number of genes in the dataset and the gene that most evenly split the training set out of this subset formed the first node in the tree (according to ref. 38). This process was repeated on each side of each decision node until either the maximum depth was reached or the remaining sample of genomes all had the same state for the gene in question. The impact of varying the number of trees produced and their maximum depth was empirically assessed based on the average effectiveness of the analysis in predicting the presence or absence of each gene (SI Appendix, Fig. S1). We chose the maximum depth and number of trees above which the performance of the models on the test set did not increase substantially. For the analyses in this manuscript, including those where the dataset was downsampled, we used 1,000 trees with a maximum depth of 16 nodes per tree.

For each gene (or set of genes with the same PAP), a prediction of either its presence or its absence was obtained for each genome in the test set according to the model generated using the training set. For each gene, four performance metrics were taken. These were Accuracy, Precision, Recall, and F1 score, all defined according to ref. 39. As our classification algorithm has two classes, we recorded a version of recall, precision, and F1 score separately for both the gene presence and for the gene absence classes.

In addition to performance statistics, the Gini importance (40) of each gene in predicting each other gene was added to an n by n matrix where n is the number of PAPs in the dataset. Here, the Gini importance is the contribution of a predictor PAP in separating the dataset into genomes where the test gene is present and those where it is absent averaged over all trees in the Random Forest. This Gini importance value can be used as a measure of the strength of the impact of the predictor gene on the presence/absence state being predicted. This statistic is appropriate when the predictor variables have two classes, as is the case here (41). All machine learning algorithms were implemented using the scikit-learn Python module version 1.0.1 (38). Code is available at https://github.com/alanbeavan/pangenome_rf (SI Appendix, Fig. S2).

In principle, it is possible that a gene’s presence may be predictable purely due to coincidental correlations arising by random transfer and loss across the phylogeny. The number of predicted genes occurring in this way can be thought of as a baseline level of false positives. We simulated the presence or absence of genes on each tip of the tree according to an nonreversible All rates Different model which allows for a different rate of 1-to-0 and 0-to-1 transitions (see ref. 42). 

For each gene family, the substitution matrix was derived from the gene presence and absence patterns observed across the phylogeny. This was achieved using the “fitDiscrete” function from the “geiger” R package (43). Following this, a presence and absence pattern for each gene was simulated using the “simulate_mk_model” function, which is part of the castor R library (44). For simulation, the probability of the gene being present at the root of the tree was equal to the root probabilities inferred by IQTree (32). We employed ancestral state reconstruction and extended model selection and used the phylogeny inferred in this study as a fixed topology. Simulations were conducted 100 times and then analyzed in a manner similar to the empirical data. However, for computational efficiency, only those Presence-Absence Patterns (PAPs) with a high F1 score (as determined in the post-processing of the network) had their D statistic estimated.

### Postprocessing the Network.

Initially, all relationships between PAPs with a GINI importance of less than 0.01 were removed from each network examined. This threshold is arbitrary, chosen to restrict the number of gene–gene relationships to the most highly ranked, a number that could be visualised.
Co-occurrence was distinguished from avoidance according to the effect of the predictor gene on the likelihood of the predicted gene’s presence. If the frequency of the target was higher when the source was present, the relationship was set as “co-occurrence.” If it was lower, then the relationship was flagged as “avoidance.” To ensure that our model only contained strongly predicted relationships, we kept only those edges where the target node was classified as accurate, which here means that the F1 score for both classes (present and absent) was greater than or equal to 90% in the test set.

Artefactual splitting of de facto gene families can, in principle, take place during pangenome construction. Therefore, using BLASTn (45, 46), we subjected the sequences of each gene family involved in any apparent avoidance relationship to a comparison with the gene family they avoid. A total of 563 gene families (before filtering for performance and D) featured at least one sequence that was identical to a sequence placed in a different family. Gene families with this property were therefore removed from our results. After this step, any two sequences from avoidant gene families never share identity of at least 50% of their nucleotides or produce a significant BLAST hit with an associated E-value < 10.

### Functional Classification of Genes and Enrichment Analysis.

Eggnog mapper version 2.1.8 (47) was used to assign gene ontology terms [go-basic release 2022-07-01 (48, 49)], and Kyoto Encyclopedia of Genes and Genomes (KEGG) pathway (50, 51) terms for each gene included in this analysis. This applied to genes with a genome occupancy ranging between 1% and 99%. Diamond-BLAST (52) was used to search the eggnog mapper database for sequences with an E-value <10−5. For functional enrichment analysis, the program used was find_enrichment.py which is part of the GOATOOLS Python library (53).

### Calculating Physical Linkage between Genes.

The physical distance between two genes was measured in the number of genes separating them, rather than base pairs. The position of each gene of the pair was extracted in each genome from the Panaroo output (30). For each pair of genes, the distance separating them was defined as the minimum distance either going clockwise or going anticlockwise around the circular chromosome. Genes present on different elements (e.g., chromosome and plasmid) were also enumerated in this way.

### Categorising Accessory Gene Dynamics.

We placed observations of gene associations into three mutually exclusive categories. The first category was putative mutualisms, where two or more genes predict each other’s presence and the strength of the prediction was similar in both directions, with the F1 statistic greater than or equal to 0.9 and the D statistic is greater than zero. For commensalisms where the presence of one gene was highly dependent on the presence of another, but the reciprocal dependency was either far weaker or nonexistent, the more abundant, or “host gene,” must have been present in almost all (>= 99%) genomes where the putative “commensal” was present. Additionally, the proportion of genomes without the commensal where the host was present must have been at least 20% of the proportion of genomes in the full dataset containing the host. That is, if the host gene occupied 50% of the genomes in the full dataset, it must have been present in 10% of the genomes where the commensal gene was absent. 

Otherwise, we did not classify a relationship as putatively commensal. If a gene–gene association was classified as commensal, it could not be classified as putatively mutualistic. Finally, we considered two genes to be putatively in competition or antagonistic of one another when the absence of one gene strongly predicted the presence of the other or vice versa, i.e., any pair of genes where the predicted gene passed the thresholds described above and was found at a lower frequency when the predictor gene was present.

### Data Visualisation.

Gephi v0.10 (54) was used to visualise networks. Network layout was achieved using the Fruchterman–Reingold layout algorithm (55). Node ranking was assigned according to the PageRank (56) algorithm weighted by Gini importance of each incoming arc. A considerable amount of variation was observed in the weight ascribed to the nodes on this network when we employed the PageRank approach to ascertain node importance. Specifically, to attach a ranking to a node, the algorithm combines the number of incoming arcs, the weight of the arcs, and the importance of the source nodes (56). Node size in Fig. 1 is proportional to node rank, as judged by the PageRank algorithm. Other graphics were produced using custom Python or R scripts.
Fig. 1.

The coincident relationships of predictable genes and their predictors. The nodes are gene families, or groups of gene families with the same PAP, and the edges are coincidence relationships with the arrow pointing at the node whose presence is predicted by the other. Edge thickness is proportional to the GINI importance value scaling linearly from the thinnest at 0.01 to the thickest at 0.062, while node size is proportional to the PageRank (56) value for that node. The PageRank algorithm has been applied here to evaluate the relative importance of each node within the network. A larger node size indicates a higher PageRank score, suggesting that the node has more influence or is more central in the network. Node size scales linearly from the smallest with a PageRank of 0.000043 to the largest with 0.002945. This visualisation aids in quickly identifying key nodes that play pivotal roles in the connectivity and flow of the network. Node colour indicates community as identified by the Louvain algorithm (57). This figure can be thought of as a high-level summary of the results of this analysis, and attention should be paid to the number of nodes in a community, the discrepancy in the size of nodes, and the number of edges emerging from nodes, in this figure, source nodes can have a D score < 0. For a version of this figure with these nodes removed, see SI Appendix, Fig. S8.

 -->