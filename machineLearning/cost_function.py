from numpy import loadtxt, zeros, ones, array
import  matplotlib.pyplot as plt
'''
you can learn more about it in here.
https://www.coursera.org/learn/machine-learning/lecture/rkTp3/cost-function
'''
def compute_cost(X, y, theta):
    '''
    Comput cost for linear regression
    '''
    #Number of traning samples
    m = y.size
    """
    numpy.dot function gives
    Dot product of two arrays.

    F or 2-D arrays iet is equivalent to matrix multiplication, and for 1-D arrays to inner product
    of vectors (without complex conjugation). For N dimensions it is a sum product over the
    last axis of a and the second-to-last of b:

    dot(a, b)[i,j,k,m] = sum(a[i,j,:] * b[k,:,m]
    """

    predictions = X.dot(theta).flatten()
    sqErrors = (predictions - y) ** 2

    J = (1.0 / (2*m)) * sqErrors.sum()
    return J

def gradient_descent(X, y, theta, alpha, num_iters):
    '''
    Performs gradient descent to learn theta
    by taking num_items gradient steps with learning
    rate alpha
    '''

    m = y.size
    '''
    numpy.zeros creates a array made of 0
    with shape we are deffining how it's should be.
    '''
    J_history = zeros(shape=(num_iters, 1))

    for i in range(num_iters):

        predictions = X.dot(theta).flatten()

        errors_x1 = (predictions - y) * X[:, 0]
        errors_x2 = (predictions - y) * X[:, 1]

        theta[0][0] = theta[0][0] - alpha * (1.0 / m) * errors_x1.sum()
        theta[1][0] = theta[1][0] - alpha * (1.0 / m) * errors_x2.sum()

        J_history[i, 0] = compute_cost(X, y, theta)
    return theta, J_history



#Load the dataset
data = loadtxt('ex1data1.txt', delimiter=",")

#Plot the data
plt.scatter(data[:, 0], data[:, 1], marker='o', c='b')
plt.title('Profits distribution')
plt.xlabel('Population of City in 10,000s')
plt.ylabel('Profit in $10,000s')
plt.grid(True)
#plt.show()


X = data[:, 0]
y = data[:, 1]

#number of training samples

m = y.size

#Add a columns of ones to X (interception data)
it = ones(shape=(m,2))
it[:, 1] = X

#Initialize theta parameters
theta = zeros(shape=(2, 1))

#Some gradient descent settings.
iterations = 1500
alpha = 0.01

print(compute_cost(it, y, theta))

theta, J_history = gradient_descent(it, y, theta, alpha, iterations)

print(theta)
#Predict values for population sizes of 35.000 and 75000
predict1 = array([1, 3.5]).dot(theta).flatten()
print('for population = 35,000 we predict a profit of %f' % (predict1 * 10000))
predict2 = array([1, 7.0]).dot(theta).flatten()
print('for population = 70,000 we predict a profit of %f' % (predict2 * 10000))

fig = plt.figure()
ax= fig.add_subplot(111)
print(J_history[: m])
print(m)
ax.scatter([i for i in range(0, 97, 1)], J_history[: m], marker='o', c='r')
# TODO: try to draw predected numbers graph.

result = it.dot(theta).flatten()
plt.plot(data[:, 0], result)
plt.show()


