interface BlogPostSummarySingleResult {
    sys: {
        id: string,
    },
    title: string,
    preface: string,
}

interface BlogPostSummaryResults {
    blogPostCollection: {
        items: BlogPostSummarySingleResult[]
    }
}

interface BlogPostSummaryResult {
    id: string,
    title: string,
    preface: string,
}

interface BlogPostDetailResult {
    blogPost: {
        title: string,
        body: string,
    }
}