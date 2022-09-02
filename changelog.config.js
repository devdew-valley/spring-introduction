module.exports = {
  disableEmoji: false,
  format: "{emoji}{type}{scope}: {subject}",
  closedIssueMessage: "JIRA ISSUE: ",
  closedIssuePrefix: "",
  list: ["docs", "review", "chore"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "subject", "body", "issues"],
  types: {
    docs: {
      description: "문서 작업 / 공부 내용 정리",
      emoji: "📄",
      value: "docs",
    },
    review: {
      description: "리뷰 내용 및 리뷰 이후 내용 추가",
      emoji: "🪡",
      value: "review",
    },
    chore: {
      description: "빌드 관련 파일 수정 및 설정 변경",
      emoji: "🧵",
      value: "chore",
    },
  },
};
