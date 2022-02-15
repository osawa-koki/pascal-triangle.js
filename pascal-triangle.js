const = pascal_triangle = n => {
	let answer = [1, 1],
		i;
	for (i = 1; i < n; i++) {
		let temp = [],
			j;
		temp.push(1);
		for (j = 0; j < answer.length - 1; j++) {
			temp.push(answer[j] + answer[j + 1])
		}
		temp.push(1);
		answer = temp.slice();
	}
	return answer;
}
