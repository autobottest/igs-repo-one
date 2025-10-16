# BM25 Java Implementation

**This is a straight copy from https://github.com/stephanj/BM25**

## 💜 Developer Humor Corner
**Q:** Why did the search algorithm turn purple?  
**A:** Because it was feeling a bit blue about its ranking performance, but then it discovered BM25 and turned into the royal purple of search relevance! 👑

---

BM25 (Best Matching 25) is a rankin function used by search engines to rank matching documents according to their relevance to a given search query.


Stemming maps different forms of the same word to a common "stem". 

The default implemmentation uses the Porter2 stemmer from Snowball.  
You can add other Stemmer implementations, for example, CoreNLP or Lucene.

